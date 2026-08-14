import "./App.css";
import { Route, Routes } from "react-router-dom";
import FlashPage from "./components/FlashPage";
import Login from "./components/Login";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Profile from "./components/Profile";

function App() {
  // const { user, setUser } = useContext(UserContext);
  return (
    <div className="wrapper">
      <Routes>
        {/* <Route element={<AuthLayout authenticated={user} />}> */}
        <Route path="/" element={<Home />} />
        {/* </Route> */}
        <Route path="/flashsheet" element={<FlashPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/users/:username" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
