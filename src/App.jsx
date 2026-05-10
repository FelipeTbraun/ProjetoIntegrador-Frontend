import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Forms from "./pages/Forms";
import Sobre from "./pages/Sobre";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/forms" element={<Forms />} />
        <Route path="/sobre" element={<Sobre />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;