import React from "react"
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Emily from "./pages/Emily";
import Steve from "./pages/Steve";
import Elon from "./pages/Elon";
import Cours from "./pages/Cours";
import Error from "./pages/Error";


function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Emily />} />
        <Route path="/steve" element={<Steve />} />
        <Route path="/elon" element={<Elon />} />
        <Route path="/cours" element={<Cours />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
