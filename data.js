/**
 * Inter IKEA Group Cleaned Financial Dataset (FY25 vs. FY26)
 * Source: Inter IKEA Holding B.V. Annual Report FY26
 * Units: EUR Millions (€M) unless otherwise specified.
 */

window.ikeaFinancialData = {
    metadata: {
        entity: "Inter IKEA Group (Inter IKEA Holding B.V.)",
        timePeriod: {
            fy25: "1 September 2024 – 31 August 2025",
            fy26: "1 September 2025 – 31 August 2026"
        },
        sampleSizeN: 2,
        notes: "Excludes Ingka Group retail operations. Standardized to account for Dutch GAAP line items."
    },
    metrics: [
        {
            category: "Total Operating Income (Revenue)",
            fy25: 26306,
            fy26: 25864,
            absoluteChange: -442,
            percentChange: -1.68,
            description: "Wholesale goods sold to franchisees plus earned franchise fees."
        },
        {
            category: "Cost of Raw Materials & Consumables",
            fy25: 21328,
            fy26: 20657,
            absoluteChange: -671,
            percentChange: -3.15,
            description: "Direct procurement, manufacturing input, and supply-chain logistics costs."
        },
        {
            category: "Other Operating Expenses & Labor",
            fy25: 3253,
            fy26: 3748,
            absoluteChange: 495,
            percentChange: 15.22,
            description: "Includes wage inflation, digital system investments, and one-off organizational restructuring costs."
        },
        {
            category: "Operating Profit (EBIT)",
            fy25: 1725,
            fy26: 1459,
            absoluteChange: -266,
            percentChange: -15.42,
            description: "Operating result before financial items and tax."
        },
        {
            category: "Net Profit",
            fy25: 1496,
            fy26: 1399,
            absoluteChange: -97,
            percentChange: -6.48,
            description: "Bottom-line profit cushioned by net financial income and currency derivative gains."
        }
    ],
    ratios: {
        fy25: {
            operatingMargin: 6.56,
            netMargin: 5.69,
            avgFTE: 25971
        },
        fy26: {
            operatingMargin: 5.64,
            netMargin: 5.41,
            avgFTE: 26826
        }
    },
    waterfallBridge: [
        { label: "FY25 EBIT", value: 1725, type: "total" },
        { label: "Revenue Volume Impact", value: -442, type: "negative" },
        { label: "Material Cost Savings", value: 671, type: "positive" },
        { label: "OpEx & Restructuring Headwinds", value: -495, type: "negative" },
        { label: "FY26 EBIT", value: 1459, type: "total" }
    ]
};
