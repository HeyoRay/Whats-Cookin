import React from "react";
import classes from './Auth.module.css';

const Auth = () => {
  return (
    <main className={classes.auth}>
        <h1>What's Cookin!</h1>
      <section>
        <form onSubmit={console.log('hi')}>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  )
}

export default Auth;