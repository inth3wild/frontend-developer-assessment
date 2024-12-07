import { ReactNode } from 'react';

export interface DashboardContextValues {
  showSideBar: boolean;
  setShowSideBar: React.Dispatch<React.SetStateAction<boolean>>;
}
export interface DashboardProviderProps {
  children: ReactNode;
}
