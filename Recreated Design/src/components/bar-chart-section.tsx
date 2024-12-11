import { ExportIcon, EyeIcon, TrashIcon } from '@/assets/icons';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Bar, BarChart, XAxis } from 'recharts';
import { ChartContainer, ChartLegend } from '@/components/ui/chart';

import { Ellipsis } from 'lucide-react';
import { barchartConfig, barchartData } from '@/constants/chart-data';

const ChartLegendContent = () => {
  const legendKeys = ['pending', 'income', 'expance'];
  return (
    <div className="flex justify-between mt-2">
      {Object.entries(barchartConfig).map(([key, { label, color }]) => {
        if (legendKeys.includes(key)) {
          return (
            <div key={key} className="flex items-center gap-2">
              <div
                className="w-3 h-3 rounded-sm"
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
    <section>
      <div>
        <div>
          <h1>Revenue</h1>
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
          <p>$112,340</p>
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
              <ChartLegend content={<ChartLegendContent />} />
              <Bar dataKey="revenue" radius={8} />
            </BarChart>
          </ChartContainer>
        </div>
      </div>
    </section>
  );
}

export default BarChartSection;