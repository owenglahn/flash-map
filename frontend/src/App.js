import "./App.css";
import { Route, Routes } from "react-router-dom";
import FlashPage from "./components/FlashPage";
import Login from "./components/Login";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Profile from "./components/Profile";
import { verifyToken } from "./services/auth";
import { createContext, useState } from "react";

export const JWTToken = createContext({
  jwtToken: null,
  setJwtToken: (token) => {},
});

function App() {
  const [jwtToken, setJwtToken] = useState(null);
  const value = { jwtToken, setJwtToken };
  return (
    <div className="wrapper">
      <JWTToken.Provider value={value}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/flashsheet" element={<FlashPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/users/:username" element={<Profile />} />
        </Routes>
      </JWTToken.Provider>
    </div>
  );
}

export default App;
