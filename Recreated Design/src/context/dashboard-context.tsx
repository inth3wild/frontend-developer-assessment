import { createContext, useState } from 'react';
import { DashboardContextValues, DashboardProviderProps } from '../types/index';

const DashboardContext = createContext<DashboardContextValues | null>(null);

function DashboardProvider({ children }: DashboardProviderProps) {
  const [showSideBar, setShowSideBar] = useState<boolean>(false);

  // Set context values
  const contextValues: DashboardContextValues = {
    showSideBar,
    setShowSideBar,
  };

  return (
    <DashboardContext.Provider value={contextValues}>
      {children}
    </DashboardContext.Provider>
  );
}

export { DashboardContext, DashboardProvider };
