import React from 'react';
import classes from '../../App.module.scss';
import logo from '../../../assets/whatscooking.png';

const heading = 'food tastes better when it\'s shared';

const Header = ({ onShow }) => {
  return (
    <div>
      <header className={classes.headHeader}>
        <img className={classes.headLogo} src={logo} height={215} />
        <h1>{heading}</h1>
        <button className= {classes.bn54} onClick={onShow}>CREATE HERE!</button>
      </header>
    </div>
  );
};

export default Header;