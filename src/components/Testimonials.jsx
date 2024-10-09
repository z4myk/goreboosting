import React, { useState, useEffect } from 'react';
import CountUp from 'react-countup';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
export const Testimonials = () => {
    const [isVisible, setIsVisible] = useState(false);

    const checkVisibility = () => {
        const rect = document.querySelector('.wrapper').getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
            setIsVisible(true);
            window.removeEventListener('scroll', checkVisibility);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', checkVisibility);
        return () => window.removeEventListener('scroll', checkVisibility);
    }, []);


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
            name: "Andres",
            feedback: "En 1 día , impecable 👌👌 , el mejor en esto es gore indudablemente 10/10"
          
        },
        {
            name: "zen",
            feedback: "Muy bueno el servicio, rapido, amable y paciente y 0 losses full victorias hasta el rango deseado, compraria en un futuro denuevo"
          
        },
        {
            name: "Vaxt",
            feedback: "Servicio God. Muy eficaz y rápido Completamente recomendado"
          
        },
        {
            name: "DylanTUKI",
            feedback: "2do boosteo, como siempre impecacle, 100% recomendado"
      
        },
        {
            name: "Mugetsu",
            feedback: "Segunda vez, sin duda el mejor, seguro, rápido y confiable 😎"
            
        },
        {
            name: "zangano5g",
            feedback: "Mi primera experiencia con el servicio y totalmente recomendado, muy rápido y también te mantiene al tanto con todo, excelente servicio y atención"
          
        },
        {
            name: "Matiasluengo",
            feedback: "Puras bestias, se corrigió todo el mmr y la mala racha, agradecido con los cabros na que decir 🔥"
           
        },
        {
            name: "Bombita",
            feedback: "Increíble, Muy confiable  y sobre todo muy económico; para el tiempo en lo que la sube es rápido , lleven su boost!!"
            
        },
        {
            name: "Unmeii",
            feedback: "demasiado buenos, rápido y a un preciazo. recomendado al 100%"
           
        },
        {
            name: "Melody",
            feedback: "Servicio de pana, rápido y profesional, recomiendo mucho porque además de eficaz es muy confiable."
           
        }
    ];

    return (
        <>
        <div className="wrapper">
            <div className="statistics d-flex justify-content-around gap-5 flex-wrap">
                {isVisible && (
                    <>
                        <div className="stat-item">
                            <h3>
                                <CountUp start={1400} end={2800} duration={3} className="iconLogo" />+ <br />Cuentas Eloboosteadas
                            </h3>
                        </div>
                        <div className="stat-item">
                            <h3>
                                <CountUp start={0} end={3} duration={3}  className="iconLogo" />+ <br />años de servicio
                            </h3>
                        </div>
                        <div className="stat-item">
                            <h3>
                                <CountUp start={600} end={1600} duration={3} className="iconLogo" />+ <br />Recomendaciones
                            </h3>
                        </div>
                    </>
                )}
            </div>
        </div>

        <section className="   pt-5 mb-5 mt-5 pb-5">
            <h2 className="text-center text-light">Nuestros Clientes</h2>
            <div className="d-flex justify-content-center">
                <hr className="w-50" />
            </div>

            <Carousel responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={3000} className="pt-4 ">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="testimonial-card p-4 m-2 text-light" style={{ backgroundColor: '#222', borderRadius: '10px' }}>
                        <p>"{testimonial.feedback}"</p>
                        <h5>- {testimonial.name}</h5>
                        <i class="fi fi-brands-discord colorDiscord"></i>
                    </div>
                ))}
            </Carousel>
            <div className="mt-5 text-center">
   
    <div>
    
    </div>

    
   
</div>

        </section>
        <div className="d-flex justify-content-center  ">

<div class="scrolldown bgScroll" >
<div class="chevrons">
<div class="chevrondown"></div>
<div class="chevrondown"></div>
</div>
</div>
</div>
        </>
    );
};
