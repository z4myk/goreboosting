import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import rankValorant from '../data/rankValorant.json';
import { Header } from '../Header';
import Swal from 'sweetalert2';
import oro from '../../assets/oro.png'
import hierroImg from '../../assets/hierro.png';
import bronzeImg from '../../assets/bronze.png';
import plataImg from '../../assets/plata.png';
import oroImg from '../../assets/oro.png';
import platinoImg from '../../assets/platino.png';
import diamanteImg from '../../assets/diamante.png';
import ascendenteImg from '../../assets/ascendente.png';
import inmortalImg from '../../assets/inmortal.png';
import radianteImg from '../../assets/radiante.webp';


export const Valorant = () => {
    const [currentRank, setCurrentRank] = useState('');
    const [desiredRank, setDesiredRank] = useState('');
    const [currentRankImage, setCurrentRankImage] = useState('');
    const [desiredRankImage, setDesiredRankImage] = useState('');

    const imageMap = {
        'hierro.png': hierroImg,
        'bronze.png': bronzeImg,
        'plata.png': plataImg,
        'oro.png': oroImg,
        'platino.png': platinoImg,
        'diamante.png': diamanteImg,
        'ascendente.png': ascendenteImg,
        'inmortal.png': inmortalImg,
        'radiante.webp': radianteImg,
    };

    const rankOrder = rankValorant.map(rank => rank.name); // Array of rank names for comparison

    const handleRankSelection = (rank, isCurrent) => {
        const selectedRank = rankValorant.find(r => r.name === rank);
        if (isCurrent) {
            // Al seleccionar un nuevo rango actual, restablece el rango deseado si es inválido
            if (desiredRank && rankOrder.indexOf(desiredRank) <= rankOrder.indexOf(rank)) {
                Swal.fire({
                    icon: "error",
                    title: "Error",
                    text: "El Rango actual no puede ser mayor al deseado.",
                    color: "#fff",
                    background: "#191a19",
                    confirmButtonColor: "#25D366",
                });
                return;
            }

            setCurrentRank(rank);
            setCurrentRankImage(selectedRank ? imageMap[selectedRank.imageUrl] : '');
            // Si el rango actual se cambia, se puede restablecer el rango deseado
            setDesiredRank('');
            setDesiredRankImage('');
        } else {
            // Validación para asegurarse de que se haya seleccionado un rango actual
            if (!currentRank) {
                Swal.fire({
                    icon: "error",
                    title: "Error",
                    text: "Por favor, selecciona primero tu rango actual.",
                    color: "#fff",
                    background: "#191a19",
                    confirmButtonColor: "#25D366",
                });
                return;
            }

            // Validación si el rango elegido no es menor al rango actual
            if (rankOrder.indexOf(rank) <= rankOrder.indexOf(currentRank)) {
                Swal.fire({
                    icon: "error",
                    title: "Error",
                    text: "El rango deseado no puede ser menor ni igual que el rango actual.",
                    color: "#fff",
                    background: "#191a19",
                    confirmButtonColor: "#25D366",
                });
                return;
            }

            setDesiredRank(rank);
            setDesiredRankImage(selectedRank ? imageMap[selectedRank.imageUrl] : '');
        }
    };

    const sendWhatsAppMessage = () => {
        if (currentRank && desiredRank) {
            const message = `Hola! Estoy interesado en un Eloboost de Valorant. Mi rango actual es ${currentRank} y quiero ser eloboosteado a ${desiredRank}.`;
            const phoneNumber = '56978737251';
            const whatsappURL = `https://api.whatsapp.com/send/?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

            window.open(whatsappURL, '_blank');
        } else {
            Swal.fire({
                icon: "error",
                title: "Error",
                text: "Por favor, selecciona tanto tu rango actual como el rango deseado.",
                color: "#fff",
                background: "#191a19",
                confirmButtonColor: "#25D366",
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
        
            <div className="container mt-5 text-light text-center">
                <h2>¡Elige tu Rango de EloBoost en Valorant!</h2>
                <div className="d-flex justify-content-center mb-5 pb-3">
                    <hr className="w-50" />
                </div>
                <div className="cardPrecios mb-5 p-2 container text-center">
                <p className="container text-light mt-4 small">
                    Entendemos que puede ser tedioso revisar los precios de los productos que deseas adquirir, especialmente considerando la variedad de rangos y combinaciones disponibles. Para facilitar el proceso y brindarte una mejor experiencia, te invitamos a contactarnos directamente con tus consultas. Estaremos encantados de responder a tus preguntas de manera rápida y ofrecerte una atención personalizada para asegurar tu completa satisfacción.
                </p>
                <Link to="/#metodosdepago" className="text-decoration-none">
                    <b>Ver nuestros métodos de pago</b>
                </Link>
            </div>
                <div className="rank-selector gap-3">
                    <h4>Rango Actual:</h4>
                    <div className="custom-select" onClick={() => document.getElementById('current-rank-options').classList.toggle('show')}>
                        <div className="selected-rank bg-dark text-light w-100 d-flex justify-content-center">
                            {currentRankImage && <img src={currentRankImage} alt={currentRank} />}
                            <b>{currentRank || 'Selecciona tu rango actual'}</b>
                        </div>
                        <ul id="current-rank-options" className="rank-options bg-dark w-100">
                            {rankValorant.map(rank => (
                                <li key={rank.id} onClick={() => handleRankSelection(rank.name, true)}>
                                    <img src={imageMap[rank.imageUrl]} alt={rank.name} />
                                    <span>{rank.name}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="custom-select text-light mt-5" onClick={() => document.getElementById('desired-rank-options').classList.toggle('show')}>
                        <h4>Rango Deseado:</h4>
                        <div className="selected-rank bg-dark w-100 d-flex justify-content-center">
                            {desiredRankImage && <img src={desiredRankImage} alt={desiredRank} />}
                            <b>{desiredRank || 'Selecciona tu rango deseado'}</b>
                        </div>
                        <ul id="desired-rank-options" className="rank-options bg-dark w-100">
                            {rankValorant.map(rank => (
                                <li key={rank.id} onClick={() => handleRankSelection(rank.name, false)}>
                                    <img src={imageMap[rank.imageUrl]} alt={rank.name} />
                                    <span>{rank.name}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div>
                    <button onClick={sendWhatsAppMessage} className="btnWhatsapp mt-3 w-50 p-3 mb-5">
                        <i className="animation"></i>Contactar Ahora <i className="animation"></i>
                    </button>
                </div>
            </div>
        </>
    );
};
