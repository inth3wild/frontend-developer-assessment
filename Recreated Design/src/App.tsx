import Sidebar from './components/sidebar';
import Home from './components/home';
import { useContext } from 'react';
import { DashboardContext } from './context/dashboard-context';
import { DashboardContextValues } from './types';
import Header from '@/components/header';

function App() {
  const { showSideBar } = useContext(
    DashboardContext
  ) as DashboardContextValues;

  return (
    <div className="h-screen relative">
      <div>
        <Header />
        {!showSideBar && <Home />}
      </div>
      {showSideBar && <Sidebar />}
    </div>
  );
}

export default App;
