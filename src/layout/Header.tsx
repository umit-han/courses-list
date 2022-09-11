import {FC} from "react";
import {Link} from "react-router-dom";
import Logo from "../assets/images/logo.jpg"

const Header: FC = () => (
    <>
      <header className="header flex align-center">
        <Link to="/">
          <img className="header__logo" src={Logo} alt="Logo" />
        </Link>
        <nav className="header__nav">
          <ul className="header__menu">
            <li className="header__menu-item">
              <Link className="header__menu-link" to="/">Home</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
)

export default Header