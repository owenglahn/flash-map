import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FlashPage from "./components/FlashPage";

function App() {
  return (
    <div className="wrapper">
      <h1>Application</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/flashsheet" element={<FlashPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
