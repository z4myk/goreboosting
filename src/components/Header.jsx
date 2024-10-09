import React from "react";
import background from "../assets/background.png";
import optimizacion from "../assets/optimizacion.jpg";
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
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active d-item">
              <img src={background} class="imagenCarousel " alt="..." />
              <div className="carousel-caption top-0  pt-5  pb-5 ">
                <div className="row contenidoCarrousel">
                  <div className="col-sm-12 col-md-12 mt-5">
                    <h1 className="text-light">
                    Líder en Eloboost Profesional Sube de rango
                      en CS, Valorant y LoL con boosters
                      de élite. 🏆
                    </h1>
                    <p className="text-light">
                      {" "}
                      Lleva tu rango al siguiente nivel ¡Alcanza el rank que
                      siempre soñaste de manera rápida y segura.
                    </p>
                <div className="d-flex justify-content-center">

                    <div class="button-borders">
                      <a href="#servicios">
                      <button class="primary-button"> VER SERVICIOS</button>
                      </a>
                    </div>
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

                    <div class="button-borders">
                      <button class="primary-button"> VER MAS DETALLES</button>
                    </div>
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
