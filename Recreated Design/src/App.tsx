import Sidebar from './components/sidebar';
import Home from './components/home';
import { useContext } from 'react';
import { DashboardContext } from './context/dashboard-context';
import { DashboardContextValues } from './types';
import Header from '@/components/header';
import DesktopSidebar from '@/components/desktop-sidebar';

function App() {
  const { showSideBar } = useContext(
    DashboardContext
  ) as DashboardContextValues;

  return (
    <div className="h-screen relative lg:container mx-auto">
      <div className="md:flex">
        <DesktopSidebar />
        <div className="w-full lg:w-[80%]">
          <Header />

          {!showSideBar && <Home />}
        </div>
      </div>
      {showSideBar && <Sidebar />}
    </div>
  );
}

export default App;
