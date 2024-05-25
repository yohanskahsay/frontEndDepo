import React from "react";
import Register from "./register";
import Login from "./login";

const App = () => {
  return (
    <div>
      <h1>Register Here</h1>
      <Register />

      <h1>Aleady have an account?, If Yes Login Here</h1>
      <Login />
    </div>
  );
};

export default App;
