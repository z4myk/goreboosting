import React from 'react';
import {Link} from 'react-router-dom'
export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark backgroundFooter  p-3">
      <div className="container-fluid">
        <Link to="/" className="text-decoration-none">
        <a className="navbar-brand text-light" href="#"> <i class="fi fi-rs-rocket-lunch iconLogo"></i> <b>WBoosting</b></a>
        </Link>
        <button
          className="navbar-toggler rounded"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto gap-4"> {/* Añadido ms-auto para alinear a la derecha */}
            <li className="nav-item">
              <Link to="/" className="text-decoration-none">
              <a className="nav-link active text-light navbarButtons efectoLista" aria-current="page" href="#"><b>Inicio</b></a>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/#servicios" className="text-decoration-none">
              <a className="nav-link text-light navbarButtons efectoLista" href="#servicios"><b>Eloboost</b></a>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/coaching#coaching" className="text-decoration-none">
              <a className="nav-link text-light navbarButtons efectoListaCoaching" href="#"><b>Coaching</b></a>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/gorestore" className="text-decoration-none">
              <a className="nav-link text-light navbarButtons efectoListaCoaching" href="#"><b>Juegos Steam</b></a>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/optimizacion-para-pc#optimizacion" className="text-decoration-none">
              <a className="nav-link text-light navbarButtons efectoLista" href="#"><b>Optimización PC</b></a>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/#metodosdepago" className="text-decoration-none">
              <a className="nav-link text-light navbarButtons efectoLista" href="#metodosdepago"><b>Métodos de Pago</b></a>
              </Link>
            </li>

       
            
            <li className="nav-item">
              <Link to="/#contactanos" className="text-decoration-none">
              <a className="nav-link text-light navbarButtons efectoLista" href="#contactanos"><b>Contacto</b></a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
