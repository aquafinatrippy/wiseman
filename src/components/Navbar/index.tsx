import { NavLink  } from "react-router-dom";
import logo from "../../assets/logo.svg";
import "./Navbar.scss";

function Navbar() {
  return (
    <>
      <div className="menu">
        <NavLink  to="/" className="logo">
          <img src={logo} alt="" />
        </NavLink>
        <nav>
          <ul>
            <li>
              <NavLink  to="/">Home</NavLink>
            </li>
            <li>
              <NavLink  to="/article">Article</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
