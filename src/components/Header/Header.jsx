import React from "react";
import logo from "../../images/Logo.svg";
import userIcon from "../../images/user.svg";
import cartIcon from "../../images/bag-2.svg";
import "./Header.scss";
function Header() {
  return (
    <header className="header">
      <div className="header__row">
        <div className="header__logo">
          <img src={logo} alt="logo" className="header__img" />
          <p className="header__logo-title">Lalasia</p>
        </div>
        <nav className="header__nav">
          <ul className="header__nav-menu">
            <ll>
              <a className="header__nav-menu-link typography__p3 " href="">
                Product
              </a>
            </ll>
            <ll>
              <a className="header__nav-menu-link typography__p3 " href="">
                Services 
              </a>
            </ll>
            <ll>
              <a className="header__nav-menu-link typography__p3 " href="">
                Article
              </a>
            </ll>
            <ll>
              <a className="header__nav-menu-link typography__p3 " href="">
                About Us
              </a>
            </ll>
          </ul>
        </nav>
        <div className="header__icons">
          <img src={cartIcon} alt="" className="header__icons-cart" />
          <img src={userIcon} alt="" className="header__icons-account" />
        </div>
      </div>
    </header>
  );
}
export default Header;
