import "./App.css";
import { Route, Routes } from "react-router-dom";
import FlashPage from "./components/FlashPage";
import Login from "./components/Login";
import Home from "./components/Home";

function App() {
  return (
    <div className="wrapper">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/flashsheet" element={<FlashPage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
