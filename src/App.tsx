import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./nav/nav";
import HomePage from "./homePage";

function App() {
  return (
    <BrowserRouter>
      <Nav />
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
