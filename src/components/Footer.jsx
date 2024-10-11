import React from 'react';
import { Link } from 'react-router-dom';
import banktransfer from '../assets/banktransfer.png'
import binance from '../assets/binance.png'
import paypal from '../assets/paypal.png'
import mercadopago from '../assets/mercadopago.png'
import yape from '../assets/yape.png'
import plin from '../assets/plin.png'
export const Footer = () => {
  return (
    <footer className="backgroundFooter text-light p-5">
      <section className="row container-fluid"> {/* Cambiado a container-fluid */}
        <div className="col-sm-12 col-md-4 mb-5  text-center">
          <h4>
            <i className="fi fi-rs-rocket-lunch iconLogo"></i> <b>goreboosting</b>
          </h4>
        </div>
        <div className="col-sm-12 col-md-4 text-center  boxFooter"> {/* Añadido text-center */}
          <h6>Nosotros</h6>
          <p className="small text-secondary p-4">
            En <b>Goreboosting</b> nos especializamos en ofrecer un servicio de eloboost impecable desde hace más de 3 años. A lo largo del tiempo, hemos expandido nuestro alcance, con más de <b>2,800</b> cuentas eloboosteadas y sin ningún baneo por eloboost, toxicidad o cualquier otro motivo.
            Somos profesionales en lo que hacemos, y nuestra seriedad y compromiso nos han convertido <b>en una de las opciones de eloboost más confiables y rápidas del mercado.</b>
          </p>
        </div>
        <div className="col-sm-12 col-md-4 text-center  boxFooter"> {/* Añadido text-center */}
          <h6>Navegación</h6>
          <Link to="/" className="text-decoration-none">
            <p className="text-secondary">Inicio</p>
          </Link>
          <Link to="/#servicios" className="text-decoration-none">
            <p className="text-secondary">Eloboost</p>
          </Link>
          <Link to="/#metodosdepago" className="text-decoration-none">
            <p className="text-secondary">Métodos de Pago</p>
          </Link>
          <Link to="/optimizacion-para-pc" className="text-decoration-none">
            <p className="text-secondary">Optimización PC</p>
          </Link>
          <Link to="/#contactanos" className="text-decoration-none">
            <p className="text-secondary">Contacto</p>
          </Link>
        </div>
        <div className="col-12 mt-5 text-center"> {/* Añadido text-center */}
          <div className="d-flex justify-content-center gap-4 flex-wrap">
            <a href="https://www.facebook.com/goreboosting/" target="_blank" className="text-decoration-none text-light">
              <i className="fi fi-brands-facebook"></i>
            </a>
            <a href="https://x.com/_9ore" target="_blank" className="text-decoration-none text-light">
              <i className="fi fi-brands-twitter-alt"></i>
            </a>
            <a href="https://www.instagram.com/goreboosting_oficial/" target="_blank" className="text-decoration-none text-light">
              <i className="fi fi-brands-instagram"></i>
            </a>
            <a href="https://www.twitch.tv/goretwitch" target="_blank" className="text-decoration-none text-light">
              <i className="fi fi-brands-twitch"></i>
            </a>
            <a href="http://discord.gg/invite/goreboosting" target="_blank" className="text-decoration-none text-light">
              <i className="fi fi-brands-discord"></i>
            </a>
          </div>
        </div>

        <div className="d-flex justify-content-center mt-4 gap-4">
            <div>
            <img  src={banktransfer} className="iconFooter" />
            </div>

            <div>
            <img  src={binance} className="iconFooterGrande" />
            </div>

            <div>
            <img  src={paypal} className="iconFooterGrande" />
            </div>

            <div>
            <img  src={mercadopago} className="iconFooterGrande" />
            </div>

            <div>
            <img  src={yape} className="iconFooter" />
            </div>

            <div>
            <img  src={plin} className="iconFooter" />
            </div>
        </div>
      </section>
      <p className="small text-secondary text-center mt-4">
        Copyright © goreboosting 2024. Desarrollado por <a href="https://www.aintech.com.ar" target="_blank" className="text-primary">aintech.com.ar</a>.
      </p>
    </footer>
  );
};
