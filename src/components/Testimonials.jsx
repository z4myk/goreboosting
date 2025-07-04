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
            name: "1-Hank-1",
            feedback: "Excelente servicio como siempre, rapido, confiable y seguro!!! 💯"
          
        },
        {
            name: "Alonso Andrés ✞",
            feedback: "Primer boosteo sin ningún problema,  muy rápido y confiable , lo recomiendo totalmente 🔥 💯"
          
        },
        {
            name: "Xaioz_",
            feedback: "Rápido, seguro y arregla el MMR, 10/10"
          
        },
        {
            name: "легенда",
            feedback: "Muy buen servicio, cumplió con todo lo estipulado y en muy poco tiempo 👍 👍"
      
        },
        {
            name: "BIGMILKYESDAPOP",
            feedback: "Excelente la mejor atencion al cliente y todo super rapido, 100% WR ademas, simplemente el mejor.💯"
            
        },
        {
            name: "zangano5g",
            feedback: "Mi primera experiencia con el servicio y totalmente recomendado, muy rápido y también te mantiene al tanto con todo, excelente servicio y atención"
          
        },
        {
            name: "yeyi",
            feedback: "Excelente, muy rápido,completamente recomendado 10/10"
           
        },
        {
            name: "!! Ako",
            feedback: "Buen servicio, cumplió con el boost en el tiempo establecido, lo recomiendo 100%!"
            
        },
        {
            name: "RorxHyperX",
            feedback: "Excelente servicio! Confiable 100 %, barato, rápido, fue mi primera experiencia contratando este servicio y me llevo un buen concepto. Recomendado."
           
        },
        {
            name: "sero",
            feedback: "demoro menos de 24hs, todas ganadas, super contento, muy confiable, recomiendo al 100"
           
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
                                <CountUp start={1400} end={3200} duration={3} className="iconLogo" />+ <br />Cuentas Eloboosteadas
                            </h3>
                        </div>
                        <div className="stat-item">
                            <h3>
                                <CountUp start={0} end={3} duration={3}  className="iconLogo" />+ <br />años de servicio
                            </h3>
                        </div>
                        <div className="stat-item">
                            <h3>
                                <CountUp start={600} end={1800} duration={3} className="iconLogo" />+ <br />Recomendaciones
                            </h3>
                        </div>
                    </>
                )}
            </div>
        </div>

        <section className="   pt-5 mb-5 mt-5 pb-5">
            <h2 className="text-center text-light">Mis Clientes</h2>
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
