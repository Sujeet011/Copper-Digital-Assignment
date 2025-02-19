import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import CancerList from "./components/CancerList";
import CancerDetails from "./components/CancerDetails";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<CancerList />} />
        <Route path="/cancer/:id" element={<CancerDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
