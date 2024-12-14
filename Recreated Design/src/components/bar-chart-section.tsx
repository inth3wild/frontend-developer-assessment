import { ExportIcon, EyeIcon, TrashIcon } from '@/assets/icons';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Bar, BarChart, XAxis } from 'recharts';
import {
  ChartContainer,
  ChartLegend,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';

import { Ellipsis } from 'lucide-react';
import { barchartConfig, barchartData } from '@/constants/chart-data';

const ChartLegendContent = () => {
  const legendKeys = ['pending', 'income', 'expance'];
  return (
    <div className="flex mt-2 gap-4">
      {Object.entries(barchartConfig).map(([key, { label, color }]) => {
        if (legendKeys.includes(key)) {
          return (
            <div key={key} className="flex items-center gap-2">
              <div
                className="min-w-3 min-h-3 rounded-sm"
                style={{ backgroundColor: color }}
              ></div>
              <span className="text-xs text-light-grey">{label}</span>
            </div>
          );
        }
      })}
    </div>
  );
};

function BarChartSection() {
  return (
    <section className="bg-white rounded-xl shadow-lg">
      <div className="space-y-4">
        <div className="flex items-center justify-between border-b border-[#E6E8F0] pb-4 md:pb-10 p-8">
          <h1 className="text-xl font-semibold">Revenue</h1>
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
        <div className="space-y-1 md:space-y-2 p-6">
          <p className="text-3xl font-bold">${'112,340'}</p>
          {/* Chart component will go here */}
          <ChartContainer
            config={barchartConfig}
            className="min-h-[200px] w-full"
          >
            <BarChart accessibilityLayer data={barchartData}>
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
              <ChartLegend content={<ChartLegendContent />} />
              <Bar dataKey="revenue" radius={5} />
            </BarChart>
          </ChartContainer>
        </div>
      </div>
    </section>
  );
}

export default BarChartSection;
