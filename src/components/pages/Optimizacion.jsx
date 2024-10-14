import React, {useEffect} from 'react'
import { useLocation } from 'react-router-dom';
import {Link} from 'react-router-dom'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Header } from '../Header';
export const Optimizacion = () => {


    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 1024 },
            items: 3
        },
        desktop: {
            breakpoint: { max: 1024, min: 768 },
            items: 2
        },
        tablet: {
            breakpoint: { max: 768, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };


    const testimonials = [
        {
            name: "RainDeuS",
            feedback: "demasiado god la optimizacion, es super confiable y rapido asi que recomendado al 100%"
          
        },
        {
            name: "w1bbaa",
            feedback: "optimización culia wena, aparte de que el servicio es súper rápido y todo transparente para que cada uno vea que hacen, recomendado al 100% :3"
          
        },
        {
            name: "Cursed",
            feedback: "pensé que mi única opción era formatear mi pc entera pero decidí confiar y fue la mejor decisión! Totalmente recomendada su optimización!"
          
        },
        {
            name: "K/2ou!",
            feedback: "Super buena la optimización ya con solo iniciar sesión después de la optimización se nota mucho el cambio muy recomendada la opti 🐱"
      
        },
        {
            name: "Gio",
            feedback: "Muy buena optimización, rápida y eficaz, se fueron todos los bajones de fps muy estables muy recomendada"
            
        },
        {
            name: "BlastocystisSp",
            feedback: "se nota la diferencia altoque, ya no me anda freezeado weooon que rico 🥵 , recomendada su optimización 🤯"
          
        },
        {
            name: "Simp de nanda",
            feedback: "Buenísima la optimización. Ya no se me laguea nada, el pc me va como avión, todo rápido y confiable. 100% recomendado👾"
           
        },
        {
            name: "Bvjaaa.",
            feedback: "Buena optimizacion me subio fps me quito mucho inputlag recomiendo la opti"
            
        },
        {
            name: "n1ckOoo",
            feedback: "Buena optimizacion del rey gore, gané FPS, ya no hay tirones, inicia todo muy rapido, recomendable 100%"
           
        },
        {
            name: "Shank zera",
            feedback: "la mejor compra de servicios hno, pc ql me iba con tirones, se demoraba en cargar las cosas, etc (tengo super buen pc), pero con la opti es como si tuviera pc nuevo, 100/10, recomendadisimo."
           
        }
    ];

    
    const location = useLocation();

    useEffect(() => {
      if (location.hash) {
        const element = document.querySelector(location.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }, [location]);

    const sendWhatsAppMessage = () => {
       
            const message = `Hola! Estoy interesado en adquirir la Optimización de PC, el costo es de ¿$10.000 CLP / 12 USD?`;
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
        <section className="text-light container text-center">
            <div className="wrapper2">

            <h2 className="mt-5" id="optimizacion" >Optimización de PC</h2>
            <div className="d-flex justify-content-center mb-2 pb-3">
                    <hr className="w-50" />
                </div>
            </div>

        <div className="d-flex justify-content-center pb-5">

                <div className="text-light text-center cardServices">
    
    <h6 className="headerText p-2 pt-3"> Plan <span className="starter">de Optimización</span></h6>





    <h4 className="headerText mb-3">$10.000 CLP / 12 USD</h4>
    <div className="row">
        <div className="col-sm-12 col-md-12 p-4 mt-3">
            <div className="d-flex align-items-center justify-content-start mb-2">
                <h6 className="mb-4">Esta optimización completa ofrece:</h6>
            </div>

            <div className="d-flex align-items-center justify-content-start mb-2">
                <i class="fi fi-ss-badge-check text-success me-2"></i>
                <span className="text-light small">-Eliminación completa de Input Lag</span>
            </div>

            <div className="d-flex align-items-center justify-content-start mb-2">
                <i class="fi fi-ss-badge-check text-success me-2"></i>
                <span className="text-light small">-Detiene el bajón o drop de FPS</span>
            </div>

            <div className="d-flex align-items-center justify-content-start mb-2">
                <i class="fi fi-ss-badge-check text-success me-2"></i>
                <span className="text-light small">-Ayuda a tener FPS más estables</span>
            </div>

            <div className="d-flex align-items-center justify-content-start mb-2">
                <i class="fi fi-ss-badge-check text-success me-2"></i>
                <span className="text-light small">-Más fluidez a la hora de jugar</span>
            </div>

            <div className="d-flex align-items-center justify-content-start mb-2">
                <i class="fi fi-ss-badge-check text-success me-2"></i>
                <span className="text-light small">-Eliminación completa de Virus en tu PC</span>
            </div>

            <div className="d-flex align-items-center justify-content-start mb-2">
                <i class="fi fi-ss-badge-check text-success me-2"></i>
                <span className="text-light small">-Análisis de tus drivers gráficos y chipsets si están correctamente instalados o no</span>
            </div>
            <div className="d-flex align-items-center justify-content-start mb-2">
                <i class="fi fi-ss-badge-check text-success me-2"></i>
                <span className="text-light small">-Optimizacion para PC/LAPTOP en windows 11 o 10.</span>
            </div>

            <div className="d-flex align-items-center justify-content-start mb-2">
                <i class="fi fi-ss-badge-check text-success me-2"></i>
                <span className="text-light small">-FULL PC Rendimiento sin instalar programas raros y sin overclock</span>
                <i class="fi fi-sr-interrogation ms-2 text-secondary" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Todos nuestros planes cuentan con protección DDoS para garantizar la máxima seguridad."></i>
            </div>
            <div className="mt-4">
            <Link to="/#metodosdepago" className="text-decoration-none">
                    <b>Ver nuestros métodos de pago</b>
                </Link>
            </div>
        <div className="d-flex justify-content-center">
        <button onClick={sendWhatsAppMessage} className="btn btn-success p-3 mt-5 w-75" ><i class="fi fi-brands-whatsapp text-light socialSvg "></i> Contactar Ahora  </button>
        </div>
    </div>
        </div>

        </div>
</div>

<div className="d-flex justify-content-center mb-5 pt-3 ">

<div class="scrolldown bgScroll " >
<div class="chevrons">
<div class="chevrondown"></div>
<div class="chevrondown"></div>
</div>
</div>
</div>


<h2>Testimonios de nuestros clientes</h2>
<div className="d-flex justify-content-center mb-2 pb-3">
                    <hr className="w-50" />
                </div>
        </section>

                <Carousel responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={3000} className="pt-4 mb-5 ">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="testimonial-card p-4 m-2 text-light" style={{ backgroundColor: '#222', borderRadius: '10px' }}>
                        <p>"{testimonial.feedback}"</p>
                        <h5>- {testimonial.name}</h5>
                        <i class="fi fi-brands-discord colorDiscord"></i>
                    </div>
                ))}
            </Carousel>
        </>
    )
}
