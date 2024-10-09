import React from 'react';

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark backgroundFooter  p-3">
      <div className="container-fluid">
        <a className="navbar-brand text-light" href="#"> <i class="fi fi-rs-rocket-lunch iconLogo"></i> <b>goreboosting</b></a>
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
              <a className="nav-link active text-light" aria-current="page" href="#"><b>Inicio</b></a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="#nosotros"><b>Sobre Nosotros</b></a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="#servicios"><b>Eloboost</b></a>
            </li>

            <li className="nav-item">
              <a className="nav-link text-light" href="#"><b>Optimización PC</b></a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="#"><b>Contacto</b></a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
