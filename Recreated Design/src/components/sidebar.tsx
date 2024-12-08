import { Logo } from '@assets/images/index';
import {
  AnalyticsIcon,
  CustomerIcon,
  DashboardIcon,
  MenuIcon,
  OrdersIcon,
} from '@assets/icons/index';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';
import AnimatedCircularProgressBar from '@/components/ui/animated-circular-progress-bar';

const sidebarLinks = [
  { id: 1, icon: DashboardIcon, name: 'Dashboard' },
  { id: 2, icon: OrdersIcon, name: 'Orders' },
  { id: 3, icon: AnalyticsIcon, name: 'Analytics' },
  { id: 4, icon: CustomerIcon, name: 'Customer' },
  { id: 5, icon: MenuIcon, name: 'Menu' },
];
function Sidebar() {
  return (
    <div className="absolute left-0 top-[58px] w-screen h-full bg-red-400">
      <div>
        <div>
          <img src={Logo} alt="logo" />
        </div>

        <ul>
          {sidebarLinks.map(({ id, icon, name }) => (
            <Link to="#" key={id}>
              <li>
                <img src={icon} alt={`${name.toLowerCase()}`} />
                <p>{name}</p>
              </li>
            </Link>
          ))}
        </ul>

        <div>
          <X />
          <AnimatedCircularProgressBar
            max={100}
            value={86}
            min={0}
            gaugePrimaryColor="red"
            gaugeSecondaryColor="blue"
          />
          <h2>Subscription Plan</h2>
          <p>Your Subscription plan will expire soon please upgrade!</p>
          <p>Upgrade</p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
