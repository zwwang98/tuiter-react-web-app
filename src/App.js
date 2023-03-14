import "./App.css";
import Labs from "./labs";
import HelloWorld from "./labs/a6/hello-world";
import Tuiter from "./tuiter";
import { BrowserRouter, Link } from "react-router-dom";
import { Routes, Route } from "react-router";
import Home from "./tuiter/home";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/*" element={<Labs />} />
          <Route path="/hello" element={<HelloWorld />} />
          <Route path="/tuiter/*" element={<Tuiter />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
