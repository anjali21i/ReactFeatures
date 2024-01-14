import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";

import "./styles.css";
import Dashboard from "./Components/Dashboard.js";
import Home from "./Components/Home.js";
import About from "./Components/About.js";
import { ROUTES } from "./utils/Routes.js";
import NavBar from "./Components/NavBar.js";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route element={<Dashboard />}>
            <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />
            <Route path={ROUTES.HOME} element={<Home />} />
            <Route path={ROUTES.ABOUT} element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
