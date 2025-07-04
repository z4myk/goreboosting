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
          <h6>Sobre mi</h6>
          <p className="small text-secondary p-4">
                   <b> Goreboosting</b> se especializa en ofrecer un servicio de eloboost impecable desde hace más de 3 años. A lo largo del tiempo, he expandido el alcance, con más de <b>3200</b> cuentas eloboosteadas y sin ningún baneo por eloboost, toxicidad o cualquier otro motivo. Soy profesional en lo que hago y mi seriedad y compromiso me han convertido <b>en una de las opciones de eloboost más confiables y rápidas del mercado</b>.
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
          <Link to="/eloboost-valorant" className="text-decoration-none">
            <p className="text-secondary">Eloboost Valorant</p>
          </Link>
          {/* <Link to="/eloboost-leagueoflegends" className="text-decoration-none">
            <p className="text-secondary">Eloboost League Of Legends</p>
          </Link>
          <Link to="/eloboost-counterstrike2" className="text-decoration-none">
            <p className="text-secondary">Eloboost Counter Strike 2</p>
          </Link> */}
          <Link to="/coaching#coaching" className="text-decoration-none">
            <p className="text-secondary">Coaching Valorant</p>
          </Link>
        </div>
        <div className="col-12 mt-5 text-center"> {/* Añadido text-center */}
          <div className="d-flex justify-content-center gap-4 flex-wrap">
            <a href="https://www.facebook.com/goreboosting/" target="_blank" className="text-decoration-none text-light" aria-label="Visita nuestra página de Facebook">
              <i className="fi fi-brands-facebook"></i>
              <span class="visually-hidden">Facebook</span>
            </a>
            <a href="https://x.com/_9ore" target="_blank" className="text-decoration-none text-light" aria-label="Visita nuestra pagina de Twitter">
              <i className="fi fi-brands-twitter-alt"></i>
              <span class="visually-hidden">Twitter</span>
            </a>
            <a href="https://www.instagram.com/goreboosting_oficial/" target="_blank" className="text-decoration-none text-light" aria-label="Visita nuestra página de Instagram">
              <i className="fi fi-brands-instagram"></i>
              <span class="visually-hidden">Instagram</span>
            </a>
            <a href="https://www.twitch.tv/goretwitch" target="_blank" className="text-decoration-none text-light" aria-label="Visita nuestro canal de Twitch">
              <i className="fi fi-brands-twitch"></i>
              <span class="visually-hidden">Twitch</span>
            </a>
            <a href="http://discord.gg/invite/goreboosting" target="_blank" className="text-decoration-none text-light" aria-label="Visita nuestro Discord">
              <i className="fi fi-brands-discord"></i>
              <span class="visually-hidden">Discord</span>
            </a>
          </div>
        </div>

        <div className="d-flex justify-content-center mt-4 gap-4">
            <div>
            <img  src={banktransfer} className="iconFooter" alt="Transferencia Bancaria" />
            </div>

            <div>
            <img  src={binance} className="iconFooterGrande" alt="Binance" />
            </div>

            <div>
            <img  src={paypal} className="iconFooterGrande" alt="Paypal" />
            </div>
{/* 
            <div>
            <img  src={mercadopago} className="iconFooterGrande" alt="Mercado Pago" />
            </div> */}

            <div>
            <img  src={yape} className="iconFooter"  alt="Yape" />
            </div>

            <div>
            <img  src={plin} className="iconFooter" alt="Plin" />
            </div>
        </div>
      </section>
      <p className="small text-secondary text-center mt-4">
        Copyright © goreboosting 2025. Desarrollado por <a href="https://www.aintech.com.ar" target="_blank" className="text-primary">aintech.com.ar</a>.
      </p>
    </footer>
  );
};
