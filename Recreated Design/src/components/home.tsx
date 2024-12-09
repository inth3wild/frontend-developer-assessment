import {
  ExportIcon,
  EyeIcon,
  SearchIcon,
  TotalCustomerIcon,
  TotalMenuIcon,
  TotalOrdersIcon,
  TotalRevenueIcon,
  TrashIcon,
} from '@/assets/icons';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import { Ellipsis } from 'lucide-react';

const totals = [
  {
    icon: TotalMenuIcon,
    name: 'Total Menu',
    totalValue: '345',
  },
  {
    icon: TotalRevenueIcon,
    name: 'Total Revenue',
    totalValue: '$37,193.00',
  },
  {
    icon: TotalCustomerIcon,
    name: 'Total Customer',
    totalValue: '1349',
  },
  {
    icon: TotalOrdersIcon,
    name: 'Total Orders',
    totalValue: '3,500',
  },
];

function Home() {
  return (
    <>
      <section>
        <div>
          <h1>Hi, Taylor!</h1>
          <p>Let's check your store today</p>
        </div>
        <div>
          <input type="search" name="search" placeholder="Search..." />
          <img src={SearchIcon} alt="search-icon" />
        </div>
      </section>

      <section>
        {totals.map(({ icon, name, totalValue }) => (
          <div>
            <img
              src={icon}
              alt={`${name.split(' ').join('-').toLowerCase()}-icon`}
            />
            <p>{name}</p>
            <h1>{totalValue}</h1>
          </div>
        ))}
      </section>

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
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
