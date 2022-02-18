import React from 'react';
import classes from '../../App.module.scss';
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <div>
      <form className={classes.signupForm}>
        <div>
          <label className={classes.signupLabel}> First Name: </label>
          <input className={classes.signupInput} type="text" name="name" placeholder="Enter your first name" />
        </div>
        <div>
          <label className={classes.signupLabel}> Last Name: </label>
          <input className={classes.signupInput} type="text" name="name" placeholder="Enter your last name" />
        </div>
        <div>
          <label className={classes.signupLabel}> Your Email: </label>
          <input className={classes.signupInput} type="text" name="name" placeholder="Enter your email" />
        </div>
        <div>
          <label className={classes.signupLabel}> Password: </label>
          <input className={classes.signupInput} type="password" name="name" placeholder="Enter your password" />
        </div>
        <div className = {classes.doubleBtn}>
          <Link to={'/'}>
            <button className={classes.signupBtn}> Go Back </button>
          </Link>
          <Link to={'/feed'}>
            <button className={classes.signupBtn}> Submit </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignUp;