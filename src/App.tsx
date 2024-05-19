import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/nav/nav";
import HomePage from "./pages/homePage";

function App() {
  return (
    <BrowserRouter>
      <Nav className="" />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} /> */}
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
