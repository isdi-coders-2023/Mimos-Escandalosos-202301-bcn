import { Link } from "react-router-dom";
import HeaderStyled from "./HeaderStyled";

const Header = (): JSX.Element => {
  return (
    <HeaderStyled className="header">
      <a href="/home" className="header__mobile__link">
        <Link to="/">
          <img
            src="img/mimo_meals_mobile.png"
            alt="mimo mobile logo"
            className="header__mobile__image"
            height={47}
            width={36}
          />
        </Link>
      </a>
      <a href="/home" className="header__desktop__link">
        <Link to="/">
          <img
            src="img/mimo_meals.png"
            alt="mimo desktop logo"
            className="header__desktop__image"
            height={80}
            width={203}
          />
        </Link>
      </a>
      <nav className="header__nav-bar nav-bar">
        <div className="nav-bar__element">
          <Link to="/" className="nav-bar__icon">
            <i className="fa-solid fa-house-chimney fa-solid--active"></i>
            <span className="nav-bar__text">Home</span>
          </Link>
        </div>

        <div className="nav-bar__element">
          <Link to="/Detail-Page" className="nav-bar__icon">
            <i className="fa-solid fa-heart fa-solid--active"></i>
            <span className="nav-bar__text">Favourites</span>
          </Link>
        </div>

        <div className="nav-bar__element">
          <Link to="/Create-Meal" className="nav-bar__icon">
            <i className="fa-solid fa-plus fa-solid--active"></i>
            <span className="nav-bar__text">Create meal</span>
          </Link>
        </div>
      </nav>
    </HeaderStyled>
  );
};

export default Header;
