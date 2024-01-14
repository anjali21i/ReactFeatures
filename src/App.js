import {
  BrowserRouter,
  Route,
  Routes,
  createBrowserRouter,
} from "react-router-dom";
import { MainComponent } from "./Components/LazyLoading/MainComponent.js";

import "./styles.css";
import Dashboard from "./Components/Dashboard.js";
import Home from "./Components/Home.js";
import About from "./Components/About.js";

export const ROUTE_COMPONENT = {};

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* {Object.keys()} */}
          <Route element={<Dashboard />}>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
