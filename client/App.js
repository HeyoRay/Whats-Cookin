import React from 'react';
import Auth from './Components/Auth/Auth';
import Feed from './Components/Feed/Feed';
import CreatePost from './Components/CreatePost/CreatePost';
import { Routes, Route } from 'react-router-dom';

const App = () => (
  <div>
    {/* <Feed /> */}
    <Routes>
      <Route
        path="/"
        element={<Auth/>}
      />
      <Route
        path="/feed"
        element={<Feed />}
      />
    </Routes>
  </div>
);

export default App;

{/* <div className="router">
  <main>
    {/*
            NOTE: The syntax below is for React-Router
              - A helpful library for routing with a React app.
              You can learn more about this at:
              https://reacttraining.com/react-router/web/guides/quick-start
//     <Switch>
//       <Route
//         exact
//         path="/"
//         component={Auth}
//       />
//       <Route
//         exact
//         path="/api"
//         component={Feed}
//       />
//     </Switch>
//   </main>
// </div> */}