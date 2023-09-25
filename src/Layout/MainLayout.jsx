import NavBar from '../Header/NavBar/Navbar';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <NavBar></NavBar>

      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;
