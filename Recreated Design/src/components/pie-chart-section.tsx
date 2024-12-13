import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@radix-ui/react-dropdown-menu';
import {
  ExportIcon,
  EyeIcon,
  TrashIcon,
  DailyChartIcon,
  WeeklyChartIcon,
} from '@/assets/icons';
import { Ellipsis, Circle } from 'lucide-react';
import { Pie, PieChart, Sector, Label } from 'recharts';
import { PieSectorDataItem } from 'recharts/types/polar/Pie';

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
import { piechartConfig, piechartData } from '@/constants/chart-data';

const PieChartSection = () => {
  return (
    <section className="bg-white rounded-xl shadow-lg">
      <div className="space-y-2 flex flex-col justify-between h-full">
        <div className="flex items-center justify-between border-b border-[#E6E8F0] pb-4 p-8">
          <div className="space-y-1">
            <h1 className="text-xl font-semibold">Customers</h1>
            <p className="text-sm text-gray-500">
              Customers that buy our products
            </p>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Ellipsis color="#8F95B2" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem className="text-light-grey">
                <img src={EyeIcon} alt="eye-icon" />
                View
              </DropdownMenuItem>
              <DropdownMenuItem className="text-light-grey">
                <img src={ExportIcon} alt="export-icon" />
                Export
              </DropdownMenuItem>
              <DropdownMenuItem className="text-[#FF754C]">
                <img src={TrashIcon} alt="trash-icon" />
                Remove
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="md:flex">
          {/* Charts would go here */}
          <ChartContainer
            config={piechartConfig}
            className="mx-auto aspect-square max-h-[250px] md:w-1/2"
          >
            <PieChart className="rounded-full shadow-pieShadow bg-yellow-400">
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              <Pie
                data={piechartData}
                dataKey="customers"
                nameKey="frequency"
                innerRadius={60}
                strokeWidth={5}
                activeIndex={0}
                activeShape={({
                  outerRadius = 0,
                  ...props
                }: PieSectorDataItem) => (
                  <Sector {...props} outerRadius={outerRadius + 10} />
                )}
              >
                <Label
                  content={({ viewBox }) => {
                    if (viewBox && 'cx' in viewBox && 'cy' in viewBox) {
                      return (
                        <text
                          x={viewBox.cx}
                          y={viewBox.cy}
                          textAnchor="middle"
                          dominantBaseline="middle"
                        >
                          <tspan
                            x={viewBox.cx}
                            y={viewBox.cy}
                            className="fill-[#0049C6] text-3xl font-bold"
                          >
                            82.3%
                          </tspan>
                          <tspan
                            x={viewBox.cx}
                            y={(viewBox.cy || 0) + 24}
                            className="fill-[#0049C6]"
                          >
                            Total
                          </tspan>
                        </text>
                      );
                    }
                  }}
                />
              </Pie>
            </PieChart>
          </ChartContainer>

          {/* Secondary pie charts */}
          <div className="grid grid-cols-1 gap-4 p-4 md:w-1/2">
            <div className="flex items-center gap-3 p-4 rounded-lg bg-gray-50">
              <img
                src={DailyChartIcon}
                alt="daily-chart-icon"
                className="w-16 h-16"
              />
              <span>
                <h2 className="text-lg font-semibold text-black">+ 18%</h2>
                <p className="text-sm text-light-grey">Daily customers</p>
              </span>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-lg bg-gray-50">
              <img
                src={WeeklyChartIcon}
                alt="weekly-chart-icon"
                className="w-16 h-16"
              />
              <span>
                <h2 className="text-lg font-semibold text-black">+ 14%</h2>
                <p className="text-sm text-light-grey">Weekly new customers</p>
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4 justify-center p-4">
          <div className="flex items-center gap-2">
            <Circle fill="#FFB7F5" strokeWidth={0} width={15} height={15} />
            <p className="text-sm text-light-grey">Current customers</p>
          </div>
          <div className="flex items-center gap-2">
            <Circle fill="#A3CB31" strokeWidth={0} width={15} height={15} />
            <p className="text-sm text-light-grey">New customers</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PieChartSection;
