// Routes.js
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes as ReactRoutes,
} from "react-router-dom";

import Home from "./pages/home";
import Notes from "./pages/notes";
import Shop from "./pages/shop";

// Importa los estilos desde navbar.css
import "./navbar.css";

const MyRoutes = () => {
  return (
    <Router>
      <div>
        {/* Barra de menú con estilos */}
        <nav className="navbar">
          {" "}
          {/* Usa la clase CSS para aplicar los estilos */}
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/notes">Notes</Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
          </ul>
        </nav>

        {/* Contenido de la página */}
        <ReactRoutes>
          <Route path="/" element={<Home />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/shop" element={<Shop />} />
        </ReactRoutes>
      </div>
    </Router>
  );
};

export default MyRoutes;
