import HeaderStyled from "./HeaderStyled";

const Header = (): JSX.Element => {
  return (
    <HeaderStyled className="header">
      <a href="/home" className="header__mobile__link">
        <img
          src="img/mimo_meals_mobile.png"
          alt="mimo mobile logo"
          className="header__mobile__image"
          height={47}
          width={36}
        />
      </a>
      <a href="/home" className="header__desktop__link">
        <img
          src="img/mimo_meals.png"
          alt="mimo desktop logo"
          className="header__desktop__image"
          height={80}
          width={203}
        />
      </a>
      <nav className="header__nav-bar nav-bar">
        <div className="nav-bar__element">
          <a href="/home" className="nav-bar__icon">
            <i className="fa-solid fa-house-chimney fa-solid--active"></i>
          </a>
          <a className="nav-bar__text" href="/home">
            Home
          </a>
        </div>

        <div className="nav-bar__element">
          <a href="/home" className="nav-bar__icon">
            <i className="fa-solid fa-heart fa-solid--active"></i>
          </a>
          <a className="nav-bar__text" href="/favourites">
            Favourites
          </a>
        </div>

        <div className="nav-bar__element">
          <a href="/home" className="nav-bar__icon">
            <i className="fa-solid fa-plus fa-solid--active"></i>
          </a>
          <a className="nav-bar__text" href="/create-meal">
            Create meal
          </a>
        </div>
      </nav>
    </HeaderStyled>
  );
};

export default Header;
