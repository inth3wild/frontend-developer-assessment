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
    <section>
      <div>
        <div>
          <h1>Customers</h1>
          <p>Customers that buy our products</p>
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

      <div>
        {/* First pie chart */}
        <div>
          <ChartContainer
            config={piechartConfig}
            className="mx-auto aspect-square max-h-[250px]"
          >
            <PieChart className="rounded-full shadow-pieShadow">
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
        </div>

        {/* Second pie chart pair  */}
        <div>
          <div>
            <img src={DailyChartIcon} alt="daily-chart-icon" />
            <span>
              <h2>+ 18%</h2>
              <p>Daily customers</p>
            </span>
          </div>
          <div>
            <img src={WeeklyChartIcon} alt="weekly-chart-icon" />
            <span>
              <h2>+ 14%</h2>
              <p>Weekly new customers</p>
            </span>
          </div>
        </div>

        {/* Legends */}
        <div>
          <Circle />
          <p>Current customers</p>
          <Circle />
          <p>New customers</p>
        </div>
      </div>
    </section>
  );
};

export default PieChartSection;
