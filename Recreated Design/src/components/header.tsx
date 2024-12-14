import { MiniLogo, ProfileAvatar } from '@assets/images/index';
import { NotificationsIcon, MailIcon, SearchIcon } from '@assets/icons/index';
import { Menu, X } from 'lucide-react';
import { DashboardContextValues } from '@/types';
import { useContext } from 'react';
import { DashboardContext } from '@/context/dashboard-context';
import { Input } from '@/components/ui/input';

function Header() {
  const { showSideBar, setShowSideBar } = useContext(
    DashboardContext
  ) as DashboardContextValues;

  function handleMenuClick() {
    setShowSideBar((previousValue) => !previousValue);
  }

  return (
    <div className="flex justify-between items-center border-b border-[#E6E8F0] pb-3 py-2 px-4 shadow-sm rounded-md md:rounded-none">
      <div className="md:hidden">
        <img src={MiniLogo} alt="logo" width={37} height={37} />
      </div>
      <div className="hidden md:block">
        <h1 className="font-bold">Hi, Taylor!</h1>
        <p className="text-light-grey">Let's check your store today</p>
      </div>
      <div className="flex items-center gap-x-4">
        <div className="hidden md:block relative mt-2">
          <Input type="search" placeholder="Search..." className="pl-8"></Input>
          <img
            src={SearchIcon}
            alt="search-icon"
            className="absolute top-1.5 left-1.5"
          />
        </div>

        <img src={MailIcon} alt="" />
        <img src={NotificationsIcon} alt="" />

        <div className="lg:hidden">
          {showSideBar ? (
            <X width={29} height={29} onClick={handleMenuClick} />
          ) : (
            <Menu width={29} height={29} onClick={handleMenuClick} />
          )}
        </div>

        <div className="hidden md:flex items-center gap-x-2">
          <img
            src={ProfileAvatar}
            alt="profile-avatar"
            className="w-12 h-12  rounded-full object-cover"
          />
          <h1 className="font-bold">Tynisha Obey</h1>
        </div>
      </div>
    </div>
  );
}

export default Header;
