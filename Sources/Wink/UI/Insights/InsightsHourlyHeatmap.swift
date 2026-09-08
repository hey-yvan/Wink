import SwiftUI

private enum InsightsHeatmapLayout {
    static let dayLabelWidth: CGFloat = 24
    static let labelGridSpacing: CGFloat = 8
    static let columnSpacing: CGFloat = 2
    static let rowSpacing: CGFloat = 3
    static let cellHeight: CGFloat = 14
    static let cellCornerRadius: CGFloat = 2
    static let tooltipGap: CGFloat = 6
}

/// Which heatmap cell the pointer is over, resolved from the grid's own
/// geometry rather than 168 per-cell hover handlers: one continuous hover
/// on the grid gives a single source of truth, no enter/exit ordering
/// races between neighbouring cells, and one overlay to position.
struct InsightsHeatmapHoveredCell: Equatable {
    let row: Int
    let hour: Int
}

enum InsightsHeatmapHoverMath {
    /// Width of one cell for a grid of `gridWidth` points holding 24
    /// columns with `columnSpacing` gaps between them.
    static func cellWidth(gridWidth: CGFloat, columnSpacing: CGFloat) -> CGFloat {
        max((gridWidth - (columnSpacing * 23)) / 24, 0)
    }

    /// Resolves the cell under `point` (grid-local coordinates, origin at
    /// the top-left of the first cell). Gaps between cells resolve to the
    /// cell they follow so the tooltip does not flicker while the pointer
    /// crosses a 2pt gutter; anything outside the grid resolves to nil.
    static func cell(
        at point: CGPoint,
        gridSize: CGSize,
        rowCount: Int,
        cellHeight: CGFloat,
        rowSpacing: CGFloat,
        columnSpacing: CGFloat
    ) -> InsightsHeatmapHoveredCell? {
        guard rowCount > 0, gridSize.width > 0, gridSize.height > 0 else { return nil }
        guard point.x >= 0, point.y >= 0, point.x < gridSize.width, point.y < gridSize.height else { return nil }

        let columnPitch = cellWidth(gridWidth: gridSize.width, columnSpacing: columnSpacing) + columnSpacing
        let rowPitch = cellHeight + rowSpacing
        guard columnPitch > 0, rowPitch > 0 else { return nil }

        let hour = min(Int(point.x / columnPitch), 23)
        let row = min(Int(point.y / rowPitch), rowCount - 1)
        return InsightsHeatmapHoveredCell(row: row, hour: hour)
    }

    /// Horizontal origin for a tooltip of `tooltipWidth` centred over the
    /// hovered column, clamped so it never leaves the grid's edges.
    static func tooltipOriginX(
        hour: Int,
        tooltipWidth: CGFloat,
        gridWidth: CGFloat,
        columnSpacing: CGFloat
    ) -> CGFloat {
        let width = cellWidth(gridWidth: gridWidth, columnSpacing: columnSpacing)
        let centerX = (CGFloat(hour) * (width + columnSpacing)) + (width / 2)
        let unclamped = centerX - (tooltipWidth / 2)
        let maxX = max(gridWidth - tooltipWidth, 0)
        return min(max(unclamped, 0), maxX)
    }

    /// "Thu, Apr 23, 2:00 – 3:00 PM" / "4月23日 周四 14:00 – 15:00": the
    /// one-hour window a cell covers, in the user's locale and clock style.
    static func windowText(
        dateKey: String,
        hour: Int,
        locale: Locale = .current,
        timeZone: TimeZone = .current
    ) -> String {
        let keyFormatter = UsageWindowMath.dateKeyFormatter(timeZone: timeZone)
        var calendar = Calendar(identifier: .gregorian)
        calendar.timeZone = timeZone
        // The last bucket ends at 23:59 rather than 00:00 of the next day:
        // an interval that crosses midnight makes the formatter spell out
        // both dates ("Wed, Sep 2 at 11:00 PM – Thu, Sep 3 at 12:00 AM").
        let endComponents = hour == 23 ? (hour: 23, minute: 59) : (hour: hour + 1, minute: 0)
        guard
            let day = keyFormatter.date(from: dateKey),
            let start = calendar.date(bySettingHour: hour, minute: 0, second: 0, of: day),
            let end = calendar.date(bySettingHour: endComponents.hour, minute: endComponents.minute, second: 0, of: day)
        else {
            return "\(dateKey) \(hour):00"
        }

        let formatter = DateIntervalFormatter()
        formatter.locale = locale
        formatter.calendar = calendar
        formatter.timeZone = timeZone
        formatter.dateTemplate = "EEEdMMMjm"
        return formatter.string(from: start, to: end)
    }

    /// Full tooltip line: "3 activations · Thu, Apr 23, 2:00 – 3:00 PM".
    /// Reuses the catalog's plural "%lld activations" so "one"/"other"
    /// resolve exactly as they do in the Most-used accessory.
    static func tooltipText(count: Int, dateKey: String, hour: Int) -> String {
        let activations = String(localized: "\(count) activations", bundle: WinkResourceBundle.bundle)
        return "\(activations) · \(windowText(dateKey: dateKey, hour: hour))"
    }
}

struct InsightsHourlyHeatmap: View {
    @Environment(\.winkPalette) private var palette

    let buckets: [HourlyUsageBucket]

    @State private var hoveredCell: InsightsHeatmapHoveredCell?
    @State private var gridSize: CGSize = .zero
    @State private var tooltipSize: CGSize = .zero

    private var groupedRows: [(date: String, counts: [Int])] {
        let orderedDates = buckets.reduce(into: [String]()) { dates, bucket in
            if dates.last != bucket.date {
                dates.append(bucket.date)
            }
        }
        let grouped = Dictionary(grouping: buckets, by: \.date)

        return orderedDates.map { date in
            let counts = (0..<24).map { hour in
                grouped[date, default: []].first(where: { $0.hour == hour })?.count ?? 0
            }
            return (date: date, counts: counts)
        }
    }

    private var maxCount: Int {
        max(buckets.map(\.count).max() ?? 0, 1)
    }

    var body: some View {
        WinkCard(
            title: {
                Text("Hourly heatmap", bundle: WinkResourceBundle.bundle)
            },
            accessory: {
                Text("Past 7 days", bundle: WinkResourceBundle.bundle)
                    .font(WinkType.labelSmall)
                    .foregroundStyle(palette.textTertiary)
            }
        ) {
            VStack(alignment: .leading, spacing: 8) {
                HStack(alignment: .top, spacing: InsightsHeatmapLayout.labelGridSpacing) {
                    VStack(spacing: InsightsHeatmapLayout.rowSpacing) {
                        ForEach(groupedRows, id: \.date) { row in
                            Text(dayLabel(for: row.date))
                                .font(.system(size: 10, weight: .regular))
                                .foregroundStyle(palette.textTertiary)
                                .lineLimit(1)
                                .fixedSize(horizontal: true, vertical: false)
                                .frame(width: InsightsHeatmapLayout.dayLabelWidth, alignment: .leading)
                                .frame(height: InsightsHeatmapLayout.cellHeight)
                        }
                    }

                    cellGrid
                }

                hourScale
            }
            .padding(.horizontal, 14)
            .padding(.vertical, 12)
            .frame(maxWidth: .infinity, alignment: .leading)
        }
    }

    private var cellGrid: some View {
        let rows = groupedRows
        return VStack(spacing: InsightsHeatmapLayout.rowSpacing) {
            ForEach(Array(rows.enumerated()), id: \.offset) { rowIndex, row in
                HStack(spacing: InsightsHeatmapLayout.columnSpacing) {
                    ForEach(Array(row.counts.enumerated()), id: \.offset) { hour, count in
                        RoundedRectangle(cornerRadius: InsightsHeatmapLayout.cellCornerRadius, style: .continuous)
                            .fill(fill(for: count))
                            .overlay {
                                if hoveredCell == InsightsHeatmapHoveredCell(row: rowIndex, hour: hour) {
                                    RoundedRectangle(cornerRadius: InsightsHeatmapLayout.cellCornerRadius, style: .continuous)
                                        .stroke(palette.textPrimary.opacity(0.55), lineWidth: 1)
                                }
                            }
                            .frame(maxWidth: .infinity)
                            .frame(height: InsightsHeatmapLayout.cellHeight)
                    }
                }
            }
        }
        .frame(maxWidth: .infinity)
        .contentShape(Rectangle())
        .onGeometryChange(for: CGSize.self) { proxy in proxy.size } action: { gridSize = $0 }
        .onContinuousHover(coordinateSpace: .local) { phase in
            switch phase {
            case .active(let point):
                hoveredCell = InsightsHeatmapHoverMath.cell(
                    at: point,
                    gridSize: gridSize,
                    rowCount: rows.count,
                    cellHeight: InsightsHeatmapLayout.cellHeight,
                    rowSpacing: InsightsHeatmapLayout.rowSpacing,
                    columnSpacing: InsightsHeatmapLayout.columnSpacing
                )
            case .ended:
                hoveredCell = nil
            }
        }
        .overlay(alignment: .topLeading) {
            if let hovered = hoveredCell, rows.indices.contains(hovered.row) {
                let row = rows[hovered.row]
                let count = row.counts[hovered.hour]
                tooltip(count: count, dateKey: row.date, hour: hovered.hour)
                    .fixedSize()
                    .onGeometryChange(for: CGSize.self) { proxy in proxy.size } action: { tooltipSize = $0 }
                    .offset(tooltipOffset(for: hovered))
                    .allowsHitTesting(false)
                    .transition(.opacity)
            }
        }
        .animation(.easeOut(duration: 0.12), value: hoveredCell)
    }

    /// Centres the tooltip over the hovered column and floats it above the
    /// hovered row. The top row has no room above it inside the card's
    /// clip, so that one flips below the cell instead.
    private func tooltipOffset(for hovered: InsightsHeatmapHoveredCell) -> CGSize {
        let x = InsightsHeatmapHoverMath.tooltipOriginX(
            hour: hovered.hour,
            tooltipWidth: tooltipSize.width,
            gridWidth: gridSize.width,
            columnSpacing: InsightsHeatmapLayout.columnSpacing
        )
        let rowTop = CGFloat(hovered.row) * (InsightsHeatmapLayout.cellHeight + InsightsHeatmapLayout.rowSpacing)
        let y = hovered.row == 0
            ? rowTop + InsightsHeatmapLayout.cellHeight + InsightsHeatmapLayout.tooltipGap
            : rowTop - InsightsHeatmapLayout.tooltipGap - tooltipSize.height
        return CGSize(width: x, height: y)
    }

    private func tooltip(count: Int, dateKey: String, hour: Int) -> some View {
        HStack(spacing: 6) {
            RoundedRectangle(cornerRadius: 1.5, style: .continuous)
                .fill(fill(for: count))
                .frame(width: 8, height: 8)
            Text(InsightsHeatmapHoverMath.tooltipText(count: count, dateKey: dateKey, hour: hour))
                .font(WinkType.labelSmall.weight(.medium))
                .foregroundStyle(palette.textPrimary)
                .lineLimit(1)
        }
        .padding(.horizontal, 8)
        .padding(.vertical, 5)
        .background(palette.controlBg)
        .overlay(
            RoundedRectangle(cornerRadius: 6, style: .continuous)
                .stroke(palette.hairlineStrong, lineWidth: 0.5)
        )
        .clipShape(RoundedRectangle(cornerRadius: 6, style: .continuous))
        .shadow(color: .black.opacity(0.18), radius: 6, y: 2)
        .accessibilityHidden(true)
    }

    private var hourScale: some View {
        HStack(spacing: InsightsHeatmapLayout.labelGridSpacing) {
            Color.clear
                .frame(width: InsightsHeatmapLayout.dayLabelWidth)

            HStack(spacing: InsightsHeatmapLayout.columnSpacing) {
                ForEach(0..<24, id: \.self) { hour in
                    Text(hourLabel(for: hour))
                        .font(WinkType.labelSmall)
                        .foregroundStyle(palette.textTertiary)
                        .lineLimit(1)
                        .minimumScaleFactor(0.8)
                        .frame(maxWidth: .infinity, alignment: .leading)
                }
            }
            .frame(maxWidth: .infinity)
        }
    }

    private func fill(for count: Int) -> Color {
        guard count > 0 else {
            return palette.heatmapEmpty
        }

        let normalized = Double(count) / Double(maxCount)
        return palette.heatmapTint.opacity(0.18 + (normalized * 0.72))
    }

    private func dayLabel(for dateString: String) -> String {
        let formatter = UsageWindowMath.dateKeyFormatter(timeZone: .current)

        guard let date = formatter.date(from: dateString) else {
            return dateString
        }

        let weekdayFormatter = DateFormatter()
        weekdayFormatter.calendar = Calendar(identifier: .gregorian)
        weekdayFormatter.dateFormat = "EEE"
        weekdayFormatter.timeZone = .current
        return weekdayFormatter.string(from: date)
    }

    private func hourLabel(for hour: Int) -> String {
        guard hour % 3 == 0 else {
            return ""
        }

        if hour == 0 {
            return "12a"
        }
        if hour == 12 {
            return "12p"
        }
        if hour < 12 {
            return "\(hour)a"
        }
        return "\(hour - 12)p"
    }
}
