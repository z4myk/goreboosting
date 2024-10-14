import React, { useState } from 'react';
import { Header } from '../Header';
import Swal from 'sweetalert2';
import premier from '../../assets/premier.png'
import faceit from '../../assets/faceit.png'
import gamersclub from '../../assets/gamersclub.png'
import {Link} from 'react-router-dom'
export const CounterStrike2 = () => {
    const [mode, setMode] = useState(''); // Estado para el modo de juego

    const handleModeSelection = (selectedMode) => {
        setMode(selectedMode);
    };

    const sendWhatsAppMessage = () => {
        if (mode) {
            const message = `Hola! Estoy interesado en un Eloboost de Counter Strike 2 en el modo ${mode}.`;
            const phoneNumber = '56978737251';
            const whatsappURL = `https://api.whatsapp.com/send/?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

            window.open(whatsappURL, '_blank');
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Por favor, selecciona un modo de juego.',
                color: '#fff',
                background: '#191a19',
                confirmButtonColor: '#25D366',
            });
        }
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
            <div className="cardPrecios mt-4 p-2 container text-center">
                <p className="container text-light mt-4">
                    Entendemos que puede ser tedioso revisar los precios de los productos que deseas adquirir, especialmente considerando la variedad de rangos y combinaciones disponibles. Para facilitar el proceso y brindarte una mejor experiencia, te invitamos a contactarnos directamente con tus consultas. Estaremos encantados de responder a tus preguntas de manera rápida y ofrecerte una atención personalizada para asegurar tu completa satisfacción.
                </p>
                <Link to="/#metodosdepago" className="text-decoration-none">
                    <b>Ver nuestros métodos de pago</b>
                </Link>
            </div>

            <div className="container mt-5 text-light text-center">
                <h2>¡Elige tu Modo de Juego para Eloboost en Counter Strike 2!</h2>
                <div className="d-flex justify-content-center mb-2 pb-3">
                    <hr className="w-50" />
                </div>

                {/* Selector de Modo de Juego */}
                <div className="game-mode-selector text-light mb-5">
                    <h4>Modo de Juego:</h4>
                    <div className="d-flex justify-content-center gap-3">
                        <button
                            className={`btn w-50 p-3 borderRankLol ${mode === 'FACEIT' ? 'btn-success' : 'btn-dark'}`}
                            onClick={() => handleModeSelection('FACEIT')}
                        >
                            <img src={faceit} className="logofaceit mx-3"/> FACEIT
                        </button>
                        <button
                            className={`btn w-50 p-3 borderRankLol ${mode === 'PREMIER/MATCHMAKING' ? 'btn-success' : 'btn-dark'}`}
                            onClick={() => handleModeSelection('PREMIER/MATCHMAKING')}
                        >
                           <img src={premier} className="w-25"/> PREMIER/MATCHMAKING
                        </button>
                        <button
                            className={`btn w-50 p-3 borderRankLol ${mode === 'GAMERSCLUB' ? 'btn-success' : 'btn-dark'}`}
                            onClick={() => handleModeSelection('GAMERSCLUB')}
                        >
                           <img src={gamersclub} className="logofaceit mx-3"/>  GAMERSCLUB
                        </button>
                    </div>
                </div>

                {/* Botón para Contactar */}
                <div>
                    <button onClick={sendWhatsAppMessage} className="btnWhatsapp mt-3 w-50 p-3 mb-5">
                        <i className="animation"></i>Contactar Ahora <i className="animation"></i>
                    </button>
                </div>
            </div>
        </>
    );
};
