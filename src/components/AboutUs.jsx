import React, { useEffect, useRef } from 'react';
import medalladeoro from '../assets/medalladeoro.png';


export const AboutUs = () => {
    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.volume = 0.5; // Configura el volumen al 50%
            videoRef.current.muted = true; 
            videoRef.current.play();  
        }
    }, []);

    return (
        <section className="container mt-5">
            <div className=" ">
                <h2 className="text-light text-center mt-5 pt-4" id="nosotros">Sobre GOREBOOSTING</h2>
                <div className="d-flex justify-content-center">
                    <hr className="w-50" />
                </div>
            </div>

            <div className="row mt-5 mb-5">
                <div className="col-sm-12 col-md-6 text-light">
                      <h5 className="text-center">Soy Especialista<img src={medalladeoro} className="iconoMedallaDeOro" alt="Medalla de oro" /></h5>
                    <p className="text-light">
                   <b> Goreboosting</b> se especializa en ofrecer un servicio de eloboost impecable desde hace más de 3 años. A lo largo del tiempo, he expandido el alcance, con más de <b>3200</b> cuentas eloboosteadas y sin ningún baneo por eloboost, toxicidad o cualquier otro motivo.
                    </p>
                    <p>
                    Soy profesional en lo que hago y mi seriedad y compromiso me han convertido <b>en una de las opciones de eloboost más confiables y rápidas del mercado</b>.
                    </p>
                    <p className="small">¿No me crees? Mira por ti mismo cómo domino en cada partida.<i className="fi fi-bs-arrow-right text-info"></i></p>
                </div>

                <div className="col-sm-12 col-md-6 text-light">
              
                    <iframe width="600" height="350" className="w-100" src="https://www.youtube.com/embed/YRjQfWdUGIo?si=i1bRfwLyqUBNv_Bk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </div>

            <div className="d-flex justify-content-center mb-5 pt-5">
                <div className="scrolldown bgScroll">
                    <div className="chevrons">
                        <div className="chevrondown"></div>
                        <div className="chevrondown"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};
