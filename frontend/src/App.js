import "./App.css";
import { Route, Routes } from "react-router-dom";
import FlashPage from "./components/FlashPage";
import Login from "./components/Login";
import Home from "./components/Home";
import Signup from "./components/Signup";

function App() {
  return (
    <div className="wrapper">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/flashsheet" element={<FlashPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
