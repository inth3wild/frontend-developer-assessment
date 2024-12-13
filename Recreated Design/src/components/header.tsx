import { MiniLogo } from '@assets/images/index';
import { NotificationsIcon, MailIcon } from '@assets/icons/index';
import { Menu, X } from 'lucide-react';
import { DashboardContextValues } from '@/types';
import { useContext } from 'react';
import { DashboardContext } from '@/context/dashboard-context';

function Header() {
  const { showSideBar, setShowSideBar } = useContext(
    DashboardContext
  ) as DashboardContextValues;

  function handleMenuClick() {
    setShowSideBar((previousValue) => !previousValue);
  }

  return (
    <div className="flex justify-between items-center border-b border-[#E6E8F0] pb-3 py-2 px-4 shadow-sm rounded-md">
      <div>
        <img src={MiniLogo} alt="logo" width={37} height={37} />
      </div>
      <div className="flex items-center">
        <img src={MailIcon} alt="" />
        <img src={NotificationsIcon} alt="" />
        {showSideBar ? (
          <X width={29} height={29} onClick={handleMenuClick} />
        ) : (
          <Menu width={29} height={29} onClick={handleMenuClick} />
        )}
      </div>
    </div>
  );
}

export default Header;
