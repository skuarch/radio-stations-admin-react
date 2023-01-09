import { Navbar } from '../navbar/Navbar';
import { Header } from '../header/Header';

export const DashboardMain = ({ children }) => {
  return (
    <>
      <Navbar />
      <Header />
      {children}
    </>
  );
};
