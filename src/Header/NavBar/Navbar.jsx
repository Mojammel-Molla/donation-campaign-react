import { NavLink } from 'react-router-dom';
import Logo from '../../assets/Logo.png';

const NavBar = () => {
  return (
    <div>
      <nav>
        <div className="navbar flex ">
          <div className="flex-1">
            <img src={Logo} alt="" />
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? 'text-orange-500 underline' : ''
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/donations"
                  className={({ isActive }) =>
                    isActive ? 'text-orange-500 underline' : ''
                  }
                >
                  Donation
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/statistics"
                  className={({ isActive }) =>
                    isActive ? 'text-orange-500 underline' : ''
                  }
                >
                  Statistics
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
