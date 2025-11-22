import React from "react";
import background1 from "../assets/background1.jpg";
import optimizacion from "../assets/optimizacion.jpg";
import coaching from "../assets/coaching.jpg";
import juegos from "../assets/juegos.jfif";
import {Link} from 'react-router-dom'
export const Header = () => {
  return (
    <header className=" ">
      <div >
        <div
          id="carouselExampleIndicators"
          class="carousel slide carousel-fade"
          data-bs-ride="carousel"
        >
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="3"
              aria-label="Slide 4"
            ></button>
            
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active d-item">
              <img src={background1} class="imagenCarousel " alt="..." />
              <div className="carousel-caption top-0  pt-5  pb-5 ">
                <div className="row contenidoCarrousel">
                  <div className="col-sm-12 col-md-12 mt-5">
                    <h1 className="text-light">
                    Líder en Eloboost y servicio Profesional de coaching Sube de rango
                      en Valorant. 🏆
                    </h1>
                    <p className="text-light">
                      {" "}
                      Lleva tu rango al siguiente nivel ¡Alcanza el rank que
                      siempre soñaste de manera rápida y segura.
                    </p>
                <div className="d-flex justify-content-center">

                      <Link to="/#servicios">
                    <div class="button-borders">
                      <button class="primary-button"> VER SERVICIOS</button>
                    </div>
                      </Link>
                </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="carousel-item">
              <img src={optimizacion} class="imagenCarousel" alt="..." />
              <div className="carousel-caption top-0   pb-5 ">
                <div className="row contenidoCarrousel">
                  <div className="col-sm-12 col-md-12 mt-5 pt-5">
                    <h2 className="text-light"> Optimización Total de PC para Gamers 🎮</h2>
                    <p>Elimina el input lag, estabiliza tus FPS y mejora el rendimiento de tu PC sin necesidad de overclock. ¡Juega con la máxima calidad y fluidez en cualquier juego!</p>

                <div className="d-flex justify-content-center">
                  <Link to="/optimizacion-para-pc#optimizacion">
                    <div class="button-borders">
                      <button class="primary-button"> VER MÁS DETALLES</button>
                    </div>
                  </Link>
                </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="carousel-item">
              <img src={coaching} class="imagenCarousel w-100" alt="..." />
              <div className="carousel-caption top-0   pb-5 ">
                <div className="row contenidoCarrousel">
                  <div className="col-sm-12 col-md-12 mt-5 pt-5">
                    <h2 className="text-light"> Coaching Profesional de Valorant 🎯</h2>
                    <p>Lleva tu juego al siguiente nivel con un entrenamiento personalizado según tu rango. Mejora tus habilidades, corrige tus errores y mantente actualizado con estrategias adaptadas a cada parche. ¡Conviértete en el jugador que siempre quisiste ser!</p>

                <div className="d-flex justify-content-center">
                  <Link to="/coaching#coaching">
                    <div class="button-borders">
                      <button class="primary-button"> VER MÁS INFORMACIÓN</button>
                    </div>
                  </Link>
                </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <img src={juegos} class="imagenCarousel w-100" alt="..." />
              <div className="carousel-caption top-0   pb-5 ">
                <div className="row contenidoCarrousel">
                  <div className="col-sm-12 col-md-12 mt-5 pt-5">
                    <h2 className="text-light"> GoreStore – Juegos de Steam al Mejor Precio 🛒</h2>      
                     <p>Consigue tus juegos favoritos de Steam a precios exclusivos. Elige hasta 
          <strong> 10 juegos por solo $20 USD</strong>, agregados directamente a tu 
          biblioteca personal mediante un proceso rápido y seguro vía AnyDesk.</p>

                <div className="d-flex justify-content-center">
                  <Link to="/gorestore">
                    <div class="button-borders">
                      <button class="primary-button"> VER MÁS INFORMACIÓN</button>
                    </div>
                  </Link>
                </div>
                  </div>
                </div>
              </div>
            </div>


          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </header>
  );
};
