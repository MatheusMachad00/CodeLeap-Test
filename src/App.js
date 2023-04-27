import { BrowserRouter, Routes, Route } from "react-router-dom";

import SignupScreen from "./pages/SignupScreen/SignupScreen";
import MainScreen from "./pages/MainScreen/MainScreen"

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignupScreen />} />
          <Route path="/home" element={<MainScreen />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
