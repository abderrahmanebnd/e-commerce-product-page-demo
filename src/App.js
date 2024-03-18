import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="collections" element={<HomePage />} />
        <Route path="women" element={<HomePage />} />
        <Route path="men" element={<HomePage />} />
        <Route path="about" element={<HomePage />} />
        <Route path="contact" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}
// adding routers and links
