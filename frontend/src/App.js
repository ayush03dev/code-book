import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import Snippet from "./pages/Snippet/Snippet";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/snippet/:id" element={<Snippet />} /> 
      </Routes>
    </Router>
  );
}

export default App;
