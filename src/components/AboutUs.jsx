import React from 'react'
import medalladeoro from '../assets/medalladeoro.png'
export const AboutUs = () => {
    return (
        
        <section className="container mt-5" >
            <div className=" ">
            <h2 className="text-light  text-center mt-5 pt-4  " id="nosotros">Sobre Nosotros</h2>
            <div className="d-flex justify-content-center">

            <hr className="w-50"/>
            </div>
            </div>

        <div className="row mt-5 mb-5" 
     >

            <div className="col-sm-12 col-md-6 text-light">
                <h5 className="text-center">Somos especialistas <img src={medalladeoro} className="iconoMedallaDeOro" alt="Medalla de oro" /></h5>
               
            <p className="text-light" >En <b>Goreboosting</b> nos especializamos en ofrecer un servicio de eloboost impecable desde hace más de 3 años. A lo largo del tiempo, hemos expandido nuestro alcance, con más de <b>2,800 </b>cuentas eloboosteadas y sin ningún baneo por eloboost, toxicidad o cualquier otro motivo.</p>
            <p >Somos profesionales en lo que hacemos, y nuestra seriedad y compromiso nos han convertido <b>en una de las opciones de eloboost más confiables y rápidas del mercado.</b> </p>
            <p className="small">¿No nos crees?
Mira por ti mismo cómo dominamos en cada partida.  <i class="fi fi-bs-arrow-right text-info"></i></p>
            </div>

            <div className="col-sm-12 col-md-6 text-light">
            <iframe width="600" height="350" className="w-100"
  src="https://www.youtube.com/embed/F5qEtdVtsvo?autoplay=1&mute=0&controls=1&loop=1&playlist=F5qEtdVtsvo"
  title="YouTube video player" 
  frameborder="0" 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
  referrerpolicy="strict-origin-when-cross-origin" 
  allowfullscreen>
</iframe>
            </div>

        </div>
        <div className="d-flex justify-content-center mb-5 pt-5 ">

        <div class="scrolldown bgScroll " >
    <div class="chevrons">
        <div class="chevrondown"></div>
        <div class="chevrondown"></div>
    </div>
</div>
        </div>
        </section>
    )
}
