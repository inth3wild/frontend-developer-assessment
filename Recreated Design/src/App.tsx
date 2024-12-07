import Sidebar from './components/sidebar';
import Home from './components/home';
import { useContext } from 'react';
import { DashboardContext } from './context/dashboard-context';
import { DashboardContextValues } from './types';

function App() {
  const { showSideBar } = useContext(
    DashboardContext
  ) as DashboardContextValues;

  return (
    <div className="h-screen py-2 px-4 relative">
      <Home />
      {showSideBar && <Sidebar />}
    </div>
  );
}

export default App;
