import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { ClassAttributes, HTMLAttributes } from "react";
import {
    CartesianGrid,
    XAxis,
    Line,
    LineChart,
    Pie,
    PieChart,
    Bar,
    BarChart,
} from "recharts";

export function BarchartChart(
    props: JSX.IntrinsicAttributes &
        ClassAttributes<HTMLDivElement> &
        HTMLAttributes<HTMLDivElement>
) {
    return (
        <div {...props}>
            <ChartContainer
                config={{
                    desktop: {
                        label: "Desktop",
                        color: "hsl(var(--chart-1))",
                    },
                }}
                className="col-span-2"
            >
                <BarChart
                    accessibilityLayer
                    data={[
                        { month: "January", desktop: 186 },
                        { month: "February", desktop: 305 },
                        { month: "March", desktop: 237 },
                        { month: "April", desktop: 73 },
                        { month: "May", desktop: 209 },
                        { month: "June", desktop: 214 },
                    ]}
                >
                    <CartesianGrid vertical={false} />
                    <XAxis
                        dataKey="month"
                        tickLine={false}
                        tickMargin={10}
                        axisLine={false}
                        tickFormatter={(value) => value.slice(0, 3)}
                    />
                    <ChartTooltip
                        cursor={false}
                        content={<ChartTooltipContent hideLabel />}
                    />
                    <Bar dataKey="desktop" fill="var(--color-desktop)" radius={8} />
                </BarChart>
            </ChartContainer>
        </div>
    );
}


export function LinechartChart(
    props: JSX.IntrinsicAttributes &
        ClassAttributes<HTMLDivElement> &
        HTMLAttributes<HTMLDivElement>
) {
    return (
        <div {...props}>
            <ChartContainer
                config={{
                    desktop: {
                        label: "Desktop",
                        color: "hsl(var(--chart-1))",
                    },
                }}
            >
                <LineChart
                    accessibilityLayer
                    data={[
                        { month: "January", desktop: 186 },
                        { month: "February", desktop: 305 },
                        { month: "March", desktop: 237 },
                        { month: "April", desktop: 73 },
                        { month: "May", desktop: 209 },
                        { month: "June", desktop: 214 },
                    ]}
                    margin={{
                        left: 12,
                        right: 12,
                    }}
                >
                    <CartesianGrid vertical={false} />
                    <XAxis
                        dataKey="month"
                        tickLine={false}
                        axisLine={false}
                        tickMargin={8}
                        tickFormatter={(value) => value.slice(0, 3)}
                    />
                    <ChartTooltip
                        cursor={false}
                        content={<ChartTooltipContent hideLabel />}
                    />
                    <Line
                        dataKey="desktop"
                        type="natural"
                        stroke="var(--color-desktop)"
                        strokeWidth={2}
                        dot={false}
                    />
                </LineChart>
            </ChartContainer>
        </div>
    );
}

export function PiechartcustomChart(
    props: JSX.IntrinsicAttributes &
        ClassAttributes<HTMLDivElement> &
        HTMLAttributes<HTMLDivElement>
) {
    return (
        <div {...props}>
            <ChartContainer
                config={{
                    visitors: {
                        label: "Visitors",
                    },
                    chrome: {
                        label: "Chrome",
                        color: "hsl(var(--chart-1))",
                    },
                    safari: {
                        label: "Safari",
                        color: "hsl(var(--chart-2))",
                    },
                    firefox: {
                        label: "Firefox",
                        color: "hsl(var(--chart-3))",
                    },
                    edge: {
                        label: "Edge",
                        color: "hsl(var(--chart-4))",
                    },
                    other: {
                        label: "Other",
                        color: "hsl(var(--chart-5))",
                    },
                }}
            >
                <PieChart>
                    <ChartTooltip
                        cursor={false}
                        content={<ChartTooltipContent hideLabel />}
                    />
                    <Pie
                        data={[
                            {
                                browser: "chrome",
                                visitors: 275,
                                fill: "var(--color-chrome)",
                            },
                            {
                                browser: "safari",
                                visitors: 200,
                                fill: "var(--color-safari)",
                            },
                            {
                                browser: "firefox",
                                visitors: 187,
                                fill: "var(--color-firefox)",
                            },
                            {
                                browser: "edge",
                                visitors: 173,
                                fill: "var(--color-edge)",
                            },
                            {
                                browser: "other",
                                visitors: 90,
                                fill: "var(--color-other)",
                            },
                        ]}
                        dataKey="visitors"
                        nameKey="browser"
                    />
                </PieChart>
            </ChartContainer>
        </div>
    );
}