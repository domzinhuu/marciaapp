import React from 'react';
import menuIcon from '../../menu.png';
import './styles.css';

const NavBar: React.FC = () => {
  return (
    <div className="navbar">
      <h1 className="font-20 text-bold light-text">Marcia Express</h1>
      <img src={menuIcon} className="menu-icon" alt="menu-icon" />
    </div>
  );
};

export default NavBar;
