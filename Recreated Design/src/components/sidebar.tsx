import { Logo } from '@assets/images/index';
import {
  AnalyticsIcon,
  CustomerIcon,
  DashboardIcon,
  MenuIcon,
  OrdersIcon,
  ActionIcon,
} from '@assets/icons/index';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';
import AnimatedCircularProgressBar from '@/components/ui/animated-circular-progress-bar';
import { motion } from 'motion/react';

const sidebarLinks = [
  { id: 1, icon: DashboardIcon, name: 'Dashboard', isActive: true },
  { id: 2, icon: OrdersIcon, name: 'Orders', isActive: false },
  { id: 3, icon: AnalyticsIcon, name: 'Analytics', isActive: false },
  { id: 4, icon: CustomerIcon, name: 'Customer', isActive: false },
  { id: 5, icon: MenuIcon, name: 'Menu', isActive: false },
];
function Sidebar() {
  return (
    <motion.div
      className="absolute left-0 p-3 w-full bg-white"
      initial={{ x: '-100%' }}
      animate={{ x: 0 }}
      exit={{ x: '-100%' }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex flex-col gap-y-4">
        <div className="hidden">
          <img src={Logo} alt="logo" />
        </div>

        <ul className="flex flex-col gap-y-2 font-bold text-light-grey">
          {sidebarLinks.map(({ id, icon, name, isActive }) => (
            <li
              className={`${
                isActive ? 'text-white bg-[#6C5DD3] rounded-xl' : ''
              } p-3`}
            >
              <Link
                className="flex gap-x-4 [&>img:nth-child(3)]:hover:inline"
                to="#"
                key={id}
              >
                <img src={icon} alt={`${name.toLowerCase()}`} />
                <p>{name}</p>
                <img
                  className={`${name === 'Orders' ? '' : 'hidden'} ml-4`}
                  src={ActionIcon}
                  alt="action-icon"
                />
              </Link>
            </li>
          ))}
        </ul>

        <div className="bg-[#F8F9FB] shadow-xsm flex flex-col p-4 rounded-xl">
          <X className="self-end w-8 h-8" color="#5F6D7E" />
          <AnimatedCircularProgressBar
            max={100}
            value={86}
            min={0}
            gaugePrimaryColor="#6C5DD3"
            gaugeSecondaryColor="transparent"
            className="text-[#6C5DD3] text-md w-20 h-20"
          />
          <h2 className="mt-2 bold">
            <strong>Subscription Plan</strong>
          </h2>
          <p className="text-[#5F6D7E]">
            Your Subscription plan will <br /> expire soon please upgrade!
          </p>
          <p className="text-[#6C5DD3] mt-3">
            <strong>Upgrade</strong>
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default Sidebar;
