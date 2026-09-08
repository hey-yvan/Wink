import Foundation
import Testing
@testable import Wink

@Suite("Insights heatmap hover")
struct InsightsHeatmapHoverTests {
    // 24 cells × 20pt + 23 gaps × 2pt = 526pt wide; 7 rows × 14pt + 6 gaps × 3pt = 116pt tall.
    private let gridSize = CGSize(width: 526, height: 116)

    private func cell(at point: CGPoint, rowCount: Int = 7) -> InsightsHeatmapHoveredCell? {
        InsightsHeatmapHoverMath.cell(
            at: point,
            gridSize: gridSize,
            rowCount: rowCount,
            cellHeight: 14,
            rowSpacing: 3,
            columnSpacing: 2
        )
    }

    @Test
    func cellWidthDividesRemainingSpaceEvenly() {
        #expect(InsightsHeatmapHoverMath.cellWidth(gridWidth: 526, columnSpacing: 2) == 20)
        #expect(InsightsHeatmapHoverMath.cellWidth(gridWidth: 10, columnSpacing: 2) == 0)
    }

    @Test
    func pointerResolvesToCellUnderIt() {
        #expect(cell(at: CGPoint(x: 0, y: 0)) == InsightsHeatmapHoveredCell(row: 0, hour: 0))
        #expect(cell(at: CGPoint(x: 19.9, y: 13.9)) == InsightsHeatmapHoveredCell(row: 0, hour: 0))
        #expect(cell(at: CGPoint(x: 22, y: 17)) == InsightsHeatmapHoveredCell(row: 1, hour: 1))
        #expect(cell(at: CGPoint(x: 525, y: 115)) == InsightsHeatmapHoveredCell(row: 6, hour: 23))
    }

    @Test
    func gutterBetweenCellsStaysWithPrecedingCell() {
        // x = 20 is the 2pt gap after hour 0; y = 14 is the 3pt gap after row 0.
        #expect(cell(at: CGPoint(x: 20.5, y: 14.5)) == InsightsHeatmapHoveredCell(row: 0, hour: 0))
    }

    @Test
    func pointerOutsideGridResolvesToNothing() {
        #expect(cell(at: CGPoint(x: -1, y: 5)) == nil)
        #expect(cell(at: CGPoint(x: 5, y: -1)) == nil)
        #expect(cell(at: CGPoint(x: 526, y: 5)) == nil)
        #expect(cell(at: CGPoint(x: 5, y: 116)) == nil)
        #expect(cell(at: CGPoint(x: 5, y: 5), rowCount: 0) == nil)
    }

    @Test
    func tooltipStaysInsideGridAtBothEdges() {
        let leading = InsightsHeatmapHoverMath.tooltipOriginX(hour: 0, tooltipWidth: 200, gridWidth: 526, columnSpacing: 2)
        let trailing = InsightsHeatmapHoverMath.tooltipOriginX(hour: 23, tooltipWidth: 200, gridWidth: 526, columnSpacing: 2)
        let middle = InsightsHeatmapHoverMath.tooltipOriginX(hour: 12, tooltipWidth: 200, gridWidth: 526, columnSpacing: 2)

        #expect(leading == 0)
        #expect(trailing == 326)
        // Hour 12 spans x 264–284, centre 274; a 200pt tooltip centres at 174.
        #expect(middle == 174)
    }

    @Test
    func tooltipWiderThanGridPinsToLeadingEdge() {
        #expect(InsightsHeatmapHoverMath.tooltipOriginX(hour: 12, tooltipWidth: 900, gridWidth: 526, columnSpacing: 2) == 0)
    }

    @Test
    func windowTextDescribesTheOneHourBucketInLocale() {
        let utc = TimeZone(secondsFromGMT: 0)!
        let english = InsightsHeatmapHoverMath.windowText(
            dateKey: "2026-04-23",
            hour: 14,
            locale: Locale(identifier: "en_US"),
            timeZone: utc
        )
        let chinese = InsightsHeatmapHoverMath.windowText(
            dateKey: "2026-04-23",
            hour: 14,
            locale: Locale(identifier: "zh_Hans_CN"),
            timeZone: utc
        )

        #expect(english.contains("Thu"))
        #expect(english.contains("Apr 23"))
        #expect(english.contains("2:00"))
        #expect(english.contains("3:00"))
        #expect(chinese.contains("周四"))
        #expect(chinese.contains("14:00"))
        #expect(chinese.contains("15:00"))
    }

    @Test
    func lastBucketStaysOnItsOwnDay() {
        let text = InsightsHeatmapHoverMath.windowText(
            dateKey: "2026-09-02",
            hour: 23,
            locale: Locale(identifier: "en_US"),
            timeZone: TimeZone(secondsFromGMT: 0)!
        )

        #expect(text.contains("Sep 2"))
        #expect(!text.contains("Sep 3"))
        #expect(text.contains("11:00"))
        #expect(text.contains("11:59"))
    }

    @Test
    func windowTextFallsBackForUnparseableDateKey() {
        let text = InsightsHeatmapHoverMath.windowText(dateKey: "not-a-date", hour: 9, locale: Locale(identifier: "en_US"))
        #expect(text == "not-a-date 9:00")
    }

    @Test
    func tooltipTextLeadsWithTheActivationCount() {
        let text = InsightsHeatmapHoverMath.tooltipText(count: 3, dateKey: "2026-04-23", hour: 14)
        #expect(text.hasPrefix("3 "))
        #expect(text.contains(" · "))
    }
}
