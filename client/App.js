import React from 'react';
import Auth from './Components/Auth/Auth';
import Feed from './Components/Feed/Feed';
import SignUp from './Components/SignUp/SignUp';
import CreatePost from './Components/CreatePost/CreatePost';
import { Routes, Route } from 'react-router-dom';

const App = () => (
  <div>
    <Routes>
      <Route
        path="/"
        element={<Auth />}
      />
      <Route
        path="/feed"
        element={<Feed />}
      />
      <Route
        path='/signup'
        element={<SignUp />}
      />
    </Routes>
  </div>
);

export default App;