import HeaderStyled from "./HeaderStyled";

const Header = (): JSX.Element => {
  return (
    <HeaderStyled className="header">
      <img
        src="img/mimo_meals_mobile.png"
        alt="mimo mobile logo"
        className="header__mobileImage"
        height={47}
        width={36}
      />
      <img
        src="img/mimo_meals.png"
        alt="mimo desktop logo"
        className="header__desktopImage"
        height={106}
        width={269}
      />
      <nav className="header__nav-bar nav-bar">
        <div className="nav-bar__element">
          <i className="fa-solid fa-house-chimney fa-solid--active"></i>
          <a className="nav-bar__text" href="#">
            Home
          </a>
        </div>
        <div className="nav-bar__element">
          <i className="fa-solid fa-heart fa-solid--active"></i>
          <a className="nav-bar__text" href="#">
            Favourites
          </a>
        </div>
        <div className="nav-bar__element">
          <i className="fa-solid fa-plus fa-solid--active"></i>
          <a className="nav-bar__text" href="#">
            Create meal
          </a>
        </div>
      </nav>
    </HeaderStyled>
  );
};

export default Header;
