import React, { useEffect } from 'react';
import seguro from '../assets/seguro.png'
import steam from '../assets/steam.png'
import dinero from '../assets/dinero.png'
import destello from '../assets/destello.png'
import lastofus from '../assets/lastofus.jpg'
import lastofus2 from '../assets/lastofus2.jpg'
import godofwar from '../assets/godofwar.jpg'
import cyberpunk from '../assets/cyberpunk.jpg'
import dragonball from '../assets/dragonball.jpg'
import eldenring from '../assets/eldenring.jpg'
import liesofp from '../assets/liesofp.jpg'
import clairexpedition from '../assets/clairexpedition.jpg'
import residentevil from '../assets/residentevil.jpg'
import spiderman2 from '../assets/spiderman2.png'

export const GoreStore = () => {

  useEffect(() => {
    // Cambia el fondo cuando entras a este componente
    document.body.style.backgroundColor = '#171A21';

    // Limpieza: vuelve al fondo original cuando salís
    return () => {
      document.body.style.backgroundColor = '';
    };
  }, []);


  
  return (
    <section className="container text-center text-light mt-5 pt-3 backgroundGore">
      <div className="hero-header">
  <h1 className="hero-title">
    GoreStore — Juegos de Steam al Mejor Precio
  </h1>

  <p className="hero-subtitle">
    ¿Los precios en Steam están muy altos? Nosotros te ayudamos.
  </p>

  <p className="hero-highlight">
    Elige <span>hasta 10 juegos por solo $20 USD</span>, agregados directamente a tu biblioteca personal y para siempre.
  </p>
</div>


      <div className="mt-4 pt-5 mb-5 pb-5">
        <h2 className="">Tus Beneficios</h2>
<div className="d-flex justify-content-center mb-5">

<hr className="w-50 hrGoreStore"/>
</div>
        <div className="row ">
          <div className="col-sm-12 col-md-3  p-3 gap-3 cardGore">
            
            <img src={seguro} className="w-25 mb-4" />
            <p><b> Proceso seguro vía AnyDesk.</b></p>
            <p className="small"> Sin riesgos, rápido y supervisado.</p>
          </div>
          <div className="col-sm-12 col-md-3 p-3 gap-3 cardGore">
                <img src={steam} className="w-25 mb-4" />
                <p><b>Juegos permanentes en tu cuenta</b></p>
            <p className="small"> No compartida, no prestada.</p>
          </div>
          <div className="col-sm-12 col-md-3 p-3 gap-3 cardGore">
          
                <img src={dinero} className="w-25 mb-4" />
                <p><b>Pagos flexibles</b></p>
          <p className="small">PayPal, Binance o transferencia chilena.</p>
          </div>
          <div className="col-sm-12 col-md-3 p-3 gap-3 cardGore">
          
                <img src={destello} className="w-25 mb-4" />
                <p><b>Entrega Rapida</b></p>
          <p className="small"> Selección → pago → instalación → ¡a jugar! </p>
          </div>

        </div>
      </div>


            <div className="d-flex justify-content-center mb-5 pt-3">
                <div className="scrolldown bgScrollGore">
                    <div className="chevrons">
                        <div className="chevrondown"></div>
                        <div className="chevrondown"></div>
                    </div>
                </div>
            </div>


      <div>
      <h2 className="mt-5 how-title">¿Cómo funciona?</h2>

<div className="d-flex justify-content-center mb-5">

<hr className="w-50 hrGoreStore"/>
</div>

<div className="row steps-container">

  <div className="col-sm-12 col-md-3 step-card">
    <p className="step-number">1</p>
    <p><b>Envíanos tu lista de juegos que deseas agregar.</b></p>
  </div>

  <div className="col-sm-12 col-md-3 step-card">
    <p className="step-number">2</p>
    <p><b>Confirmamos disponibilidad y valor final.</b></p>
  </div>

  <div className="col-sm-12 col-md-3 step-card">
    <p className="step-number">3</p>
    <p><b>Realizas el pago mediante tu método preferido.</b></p>
  </div>

  <div className="col-sm-12 col-md-3 step-card">
    <p className="step-number">4</p>
    <p><b>Nos conectamos por AnyDesk para completar la instalación.</b></p>
  </div>

  <div className="col-12 numberGoreStore mb-5 ">
    <p className="step-number ">✔</p>
    <p><b>¡Listo! Tus juegos quedan en tu Steam personal para siempre.</b></p>
  </div>

</div>
        </div>


   <div className="d-flex justify-content-center mb-5 pt-3">
                <div className="scrolldown bgScrollGore">
                    <div className="chevrons">
                        <div className="chevrondown"></div>
                        <div className="chevrondown"></div>
                    </div>
                </div>
            </div>

        <div className="mt-5">
  <h2>Juegos más Comprados</h2>

  <div className="d-flex justify-content-center mb-5">
    <hr className="w-50 hrGoreStore mb-4" />
  </div>

<div className="games-list d-flex justify-content-center gap-2 flex-wrap">

  <div className="game-card">
    <span className="rank">1</span>
    <img src={lastofus} alt="The Last of Us" />
    <div className="game-overlay">The Last of Us</div>
  </div>

  <div className="game-card">
    <span className="rank">2</span>
    <img src={lastofus2} alt="The Last of us 2" />
    <div className="game-overlay">The Last Of Us 2</div>
  </div>

  <div className="game-card">
    <span className="rank">3</span>
    <img src={godofwar} alt="God Of War" />
    <div className="game-overlay">God Of War</div>
  </div>
  <div className="game-card">
    <span className="rank">4</span>
    <img src={cyberpunk} alt="Cyberpunk" />
    <div className="game-overlay">Cyberpunk</div>
  </div>
  <div className="game-card">
    <span className="rank">5</span>
    <img src={dragonball} alt="Dragon Ball Sparking Zero" />
    <div className="game-overlay">Dragon Ball Sparking Zero</div>
  </div>

  <div className="game-card">
    <span className="rank">6</span>
    <img src={eldenring} alt="Elden ring" />
    <div className="game-overlay">Elden Ring</div>
  </div>
  <div className="game-card">
    <span className="rank">7</span>
    <img src={spiderman2} alt="Spiderman" />
    <div className="game-overlay">Spiderman 2</div>
  </div>
  <div className="game-card">
    <span className="rank">8</span>
    <img src={liesofp} alt="Lies Of P" />
    <div className="game-overlay">Lies Of P</div>
  </div>
  <div className="game-card">
    <span className="rank">9</span>
    <img src={clairexpedition} alt="Clair Expedition" />
    <div className="game-overlay">Clair Expedition</div>
  </div>
  <div className="game-card">
    <span className="rank">10</span>
    <img src={residentevil} alt="Resident Evil 4 Remake" />
    <div className="game-overlay">Resident Evil 4 Remake</div>
  </div>

</div>

</div>



<div className="contact-section mt-5 pt-5 pb-5">

  <h2 className="contact-title">Contactame</h2>

  <div className="d-flex justify-content-center">
    <hr className="w-50 hrGoreStore mb-4" />
  </div>

  <p className="contact-sub">
    Si necesitas ayuda o deseas iniciar tu compra, contáctanos por aquí:
  </p>

  <div className=" d-flex justify-content-center gap-5 mt-4 contact-grid">


    {/* INSTAGRAM */}
    <div className="">
       <a
                    className="socialContainer text-decoration-none containerFour"
                    target="_blank"
                    href="http://discord.gg/gorestore"
                  >
                     <span class="visually-hidden">Discord</span>
                    <i class="fi fi-brands-discord iconDiscord  text-light mx-5 socialSvg"></i>
                  </a>
     
    </div>
      <a
                    className="socialContainer text-decoration-none containerOne"
                    target="_blank"
                    href="http://instagram.com/goreboosting_oficial"
                  >
                     <span class="visually-hidden">Instagram</span>
                    <i
                      class="fi fi-brands-instagram rounded text-light socialSvg"
                      aria-hidden="true"
                    ></i>
                  </a>

  </div>
</div>


  
    </section>







      );
};