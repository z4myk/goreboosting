import React, {useEffect} from 'react'
import { Header } from '../Header'
import ambar from '../../assets/ambar.png'
import jade from '../../assets/jade.png'
import zafiro from '../../assets/zafiro.png'

import {Link, useLocation} from 'react-router-dom'
import chile from '../../assets/chile.png'
import argentina from '../../assets/argentina.png'

import internacional from '../../assets/internacional.png'
export const Couching = () => {

    const location = useLocation();

    useEffect(() => {
      if (location.hash) {
        const element = document.querySelector(location.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }, [location]);



    useEffect(() => {
        const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
        tooltipTriggerList.forEach((tooltipTriggerEl) => {
          new bootstrap.Tooltip(tooltipTriggerEl);
        });
      }, []);
    const sendWhatsAppMessage = () => {
       
        const message = `Hola! Estoy interesado en adquirir el Coaching para Valorant`;
        const phoneNumber = '56978737251';
        const whatsappURL = `https://api.whatsapp.com/send/?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

        window.open(whatsappURL, '_blank');
   
};
    return (
        <>
                <Header />
                
                <div className="d-flex justify-content-center mb-5 pt-5 ">
              

<div class="scrolldown bgScroll " >
<div class="chevrons">
<div class="chevrondown"></div>
<div class="chevrondown"></div>
</div>
</div>
</div>
            <section className="text-center text-light container">
    
<h2  id="coaching">Muchos pidieron durante meses que volviera el servicio de coaching, y les traigo buenas noticias, ¡estoy de vuelta!</h2>
        <p className="">Si necesitas ayuda para mejorar y sentir la satisfacción misma de ver que tu juego personal mejora con el tiempo, esta sección es para ti. Cuento con muchos años de experiencia en el competitivo de los shooters como 1.6 y CS:GO, y en Valorant llegando a radiant bajo el top 50 en Brasil y dentro del top 10 muchas veces en LAS.</p>
        <div className="wrapper2">

<h2 className="mt-5" id="optimizacion" >Coaching</h2>
<div className="d-flex justify-content-center mb-2 pb-3">
        <hr className="w-50" />
    </div>
</div>
    <div className="row">
        <div className="col-sm-12 col-md-12">
        <div className="d-flex justify-content-center pb-5 mb-5">

<div className="text-light text-center cardServicesCouching ">

<h6 className="headerText p-2 pt-3"> Plan <span className="starter">de Coaching</span></h6>

<div className="row">
<div className="col-sm-12 col-md-12 p-4 mt-3">
<div className="d-flex align-items-center justify-content-start mb-2">
<h6 className="mb-4">Este coaching completo ofrece:</h6>
</div>

<div className="d-flex align-items-center justify-content-start mb-2">
<i class="fi fi-ss-badge-check text-success me-2"></i>
<span className="text-light small">-5 Sesiones mensuales</span>
</div>

<div className="d-flex align-items-center justify-content-start mb-2">
<i class="fi fi-ss-badge-check text-success me-2"></i>
<span className="text-light small">-Análisis completo de tu estilo de juego</span>
</div>

<div className="d-flex align-items-center justify-content-start mb-2">
<i class="fi fi-ss-badge-check text-success me-2"></i>
<span className="text-light small">-Corrección de errores y sobresaltar virtudes para perfeccionarlas</span>
</div>

<div className="d-flex align-items-center justify-content-start mb-2">
<i class="fi fi-ss-badge-check text-success me-2"></i>
<span className="text-light small">-Guías / Videos de apoyo</span>
</div>

<div className="d-flex align-items-center justify-content-start mb-2">
<i class="fi fi-ss-badge-check text-success me-2"></i>
<span className="text-light small">-Consejos y Tips para mejorar</span>
</div>

<div className="d-flex align-items-center justify-content-start mb-2">
<i class="fi fi-ss-badge-check text-success me-2"></i>
<span className="text-light small">-Composición de agentes para cada mapa (Explicativo)</span>
</div>

<div className="d-flex align-items-center justify-content-start mb-2">
<i class="fi fi-ss-badge-check text-success me-2"></i>
<span className="text-light small">
-Mejores agentes para el META actual (Explicativo)
</span>
</div>
<div className="d-flex align-items-center justify-content-start mb-2">
<i class="fi fi-ss-badge-check text-success me-2"></i>
<span className="text-light small">-Crosshair Placement (Que es y cómo mejorarla)</span>
</div>
<div className="d-flex align-items-center justify-content-start mb-2">
<i class="fi fi-ss-badge-check text-success me-2"></i>
<span className="text-light small">-Map Awareness (Que es y cómo adquirirlo)</span>
<i class="fi fi-sr-interrogation ms-2 text-secondary" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Todos nuestros planes cuentan con protección DDoS para garantizar la máxima seguridad."></i>
</div>
<div className="d-flex align-items-center justify-content-start mb-2">
<i class="fi fi-ss-badge-check text-success me-2"></i>
<span className="text-light small">-Rutinas de AIM personalizadas</span>
</div>
<div className="d-flex align-items-center justify-content-start mb-2">
<i class="fi fi-ss-badge-check text-success me-2"></i>
<span className="text-light small">-Maineo de tu agente favorito</span>
</div>
<div className="d-flex align-items-center justify-content-start mb-2">
<i class="fi fi-ss-badge-check text-success me-2"></i>
<span className="text-light small">-Gamesense y sus derivados</span>
</div>
<p>Y MUCHO MÁS.</p>


</div>
</div>

</div>
</div>
        </div>

              
        <div className="d-flex justify-content-center mb-5  ">
              

              <div class="scrolldown bgScroll " >
              <div class="chevrons">
              <div class="chevrondown"></div>
              <div class="chevrondown"></div>
              </div>
              </div>
              </div>

        <div className="mb-5 pb-5">
            <h3 className="mb-4">
¿Cómo identificar que le hace falta a cada uno o qué cosas deberían mejorar? </h3>
<p className="small">simple, esto se divide en 3 bloques de rangos:
</p>
<div className="mb-5 d-flex justify-content-between ">
    <div className="">
        <p className="text-success"><b>Jade</b></p>
    <img src={jade} className="w-25" />
    <p className="mt-3">Hierro - Bronce - Plata</p>
    </div>


    <div>
    <p className="text-primary"><b>Zafiro</b></p>
    <img src={zafiro} className="w-25" />
    <p className="mt-3">Oro - Platino - Diamante</p>
    </div>

    <div>
        <p className="text-warning"><b>Ámbar</b></p>
    <img src={ambar} className="w-25" />
    <p className="mt-3">Ascendente - Inmortal</p>
    </div>
</div>

      
        </div>
    </div>

    <h4 className="mb-2">¿Cómo funciona el sistema de coaching?</h4>
    <div className="d-flex justify-content-center mb-5 pb-3">
                    <hr className="w-50" />
                </div>
                <div className="d-flex justify-content-between flex-wrap gap-5 mb-5">
    <div className="mb-3">
        <p className="small">
            <strong>Entrenamiento personalizado por rango:</strong><br /> Serás asignado a un bloque según tu rango actual (por ejemplo, Platino 3 entra al bloque <em>Zafiro</em>). En este bloque, trabajarás en aspectos específicos que suelen descuidarse en ese nivel, ayudándote a mejorar de manera personalizada. Este enfoque evita el coaching generalizado, que no diferencia las necesidades de jugadores de distintos rangos, como Ascendente u Oro.
        </p>
    </div>
    <div className="mb-3">
        <p className="small">
            <strong>Análisis y mejora continua:</strong><br />  Cada bloque está diseñado para potenciar tu desempeño en partidas rankeds. Analizaré tu estilo de juego, destacando tus fortalezas y corrigiendo tus debilidades, para que puedas crecer como jugador de manera estructurada.
        </p>
    </div>
    <div className="mb-3">
        <p className="small">
            <strong>Beneficios adicionales:</strong><br />  Al adquirir el coaching, tendrás un año completo de retroalimentación gratuita. Podrás hacer consultas por mensaje directo sobre dudas, pedir consejos y obtener tips personalizados (mostrando tu bloque y ticket de compra). Además, cada vez que haya un parche nuevo, recibirás actualizaciones gratuitas sobre estrategias, agentes, armas o mapas, manteniéndote siempre al día en un juego tan dinámico como Valorant.
        </p>
    </div>
</div>


<h4 className="mt-5 pt-5">¿Cuanto cuesta el coaching?</h4>
<div className="d-flex justify-content-center pb-3">
                    <hr className="w-50" />
                </div>
<p className="text-secondary small">El precio es igualitario para cualquier grupo, ya sea Jade, Zafiro o Ámbar. </p>
<small><b>(5 sesiones en el mes, elige tu horario y día)</b></small> 
<div className="d-flex justify-content-between mb-5 mt-5">
    <div>
        <img src={chile} className="w-25"/>
        <p>$20.000 CLP (Transferencia bancaria)
</p>
    </div>
   
    <div>
        <img src={internacional} className="w-25"/>
<p>$20 usd (Binance o Paypal)  <i class="fi fi-ts-diamond-exclamation text-warning ms-2" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Si es por paypal, se debe pagar una comisión extra de 1 usd."></i></p>
    </div>
</div>

  <p className="small">Para adquirirlo y agendarte, solo clickea aquí y serás derivado al Whatsapp en donde gore te hablará personalmente para agendar el coaching y comenzar.</p>
<div className="d-flex justify-content-center mb-5">
<button onClick={sendWhatsAppMessage} className="btn btn-success p-3 w-75" ><i class="fi fi-brands-whatsapp text-light socialSvg "></i> Contactar Ahora  </button>
</div>


            </section>
        </>
    )
}
