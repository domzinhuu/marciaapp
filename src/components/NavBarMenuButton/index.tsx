import React from 'react';
import menuIcon from './menu.svg';
import './styles.css';

const NavBarMenuButton: React.FC = () => {
  return (
    <>
      <button className="navbar-menu-button">
        <img src={menuIcon} alt="menu-icon" />
      </button>
    </>
  );
};

export default NavBarMenuButton;
