import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Forms from "./pages/Forms";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/formularios" element={<Forms />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;