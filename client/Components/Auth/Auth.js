import React, { useState, useEffect } from 'react';
import Button from './Button';
import classes from '../../App.module.scss';
import { Link } from 'react-router-dom';
import logo from '../../../assets/whatscooking.png';


const Auth = () => {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [emailIsValid, setEmailIsValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState('');
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  useEffect(() => {

    return () => {
    };
  }, []);

  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log('Checking form validity!');
      setFormIsValid(
        enteredEmail.includes('@') && enteredPassword.trim().length > 6
      );
    }, 500);

    return () => {
      clearTimeout(identifier);
    };
  }, [enteredEmail, enteredPassword]);

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  const validateEmailHandler = () => {
    setEmailIsValid(enteredEmail.includes('@'));
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    // props.onLogin(enteredEmail, enteredPassword);
  };
  return (
    <div>
      <div className={classes.header}>
        <img className={classes.logo} src={logo} height={300} />
        {/* <h2 className={classes.title}>Food Tastes Best Shared!</h2> */}
      </div>
      <main className={classes.auth}>
        <section>
          <form>
            <div
              className={`${classes.control} ${emailIsValid === false ? classes.invalid : ''
              }`}
            >
              <label htmlFor='email'>Email</label>
              <input
                type="email"
                id="email"
                value={enteredEmail}
                onChange={emailChangeHandler}
                onBlur={validateEmailHandler}
              />
            </div>
            <div
              className={`${classes.control} ${passwordIsValid === false ? classes.invalid : ''
              }`}
            >
              <label htmlFor='password'>Password</label>
              <input
                type="password"
                id="password"
                value={enteredPassword}
                onChange={passwordChangeHandler}
                onBlur={validatePasswordHandler}
              />
            </div>
            <div className={classes.doubleBtn}>
              <Link to={'/feed'}>
                <Button type="submit" className={classes.btn} disabled={!formIsValid}>
                  Login</Button>
              </Link>
              <Link to={'/signup'} >
                <Button type="submit" className={classes.btn}>
                  Sign Up</Button>
              </Link>
            </div>
          </form>
        </section>
      </main>
    </div>
  );
};

export default Auth;
