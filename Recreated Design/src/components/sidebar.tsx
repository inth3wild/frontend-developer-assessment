import { Logo } from '../assets/images/index';
import { DashboardIcon } from '../assets/icons/index';
function Sidebar() {
  return (
    <div className="absolute left-0 top-[58px] w-screen h-full bg-red-400">
      <div>
        <div>
          <img src={Logo} alt="logo" />
        </div>

        <div>
          <ul>
            <li>
              <img src={DashboardIcon} alt="dashboard-icon" />
              <p>Dashboard</p>
            </li>
          </ul>
        </div>
      </div>
      Sidebar
      <p>ss</p>
    </div>
  );
}

export default Sidebar;
