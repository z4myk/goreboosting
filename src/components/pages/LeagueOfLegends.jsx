import React, { useState } from 'react';
import { Header } from '../Header';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import unrankedImg from '../../assets/lolunranked.webp';
import hierroImg from '../../assets/lolhierro.webp';
import bronzeImg from '../../assets/lolbronce.webp';
import plataImg from '../../assets/lolplata.webp';
import oroImg from '../../assets/loloro.webp';
import platinoImg from '../../assets/lolplatino.webp';
import esmeraldaImg from '../../assets/lolesmeralda.webp';
import diamanteImg from '../../assets/loldiamante.webp';
import maestroImg from '../../assets/lolmaestro.webp';
import rankLeagueOfLegends from '../data/rankLeagueOfLegends.json';

export const LeagueOfLegends = () => {
    const [currentRank, setCurrentRank] = useState('');
    const [desiredRank, setDesiredRank] = useState('');
    const [currentRankImage, setCurrentRankImage] = useState('');
    const [desiredRankImage, setDesiredRankImage] = useState('');
    const [mode, setMode] = useState(''); // Estado para el modo de juego (Solo/Duo o Flexible)

    const imageMap = {
        'lolunranked.webp': unrankedImg,
        'lolhierro.webp': hierroImg,
        'lolbronce.webp': bronzeImg,
        'lolplata.webp': plataImg,
        'loloro.webp': oroImg,
        'lolplatino.webp': platinoImg,
        'lolesmeralda.webp': esmeraldaImg,
        'loldiamante.webp': diamanteImg,
        'lolmaestro.webp': maestroImg,
    };

    const rankOrder = rankLeagueOfLegends.map(rank => rank.name);

    const handleRankSelection = (rank, isCurrent) => {
        const selectedRank = rankLeagueOfLegends.find(r => r.name === rank);
        if (isCurrent) {
            if (desiredRank && rankOrder.indexOf(desiredRank) <= rankOrder.indexOf(rank)) {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'El Rango actual no puede ser mayor al deseado.',
                    color: '#fff',
                    background: '#191a19',
                    confirmButtonColor: '#25D366',
                });
                return;
            }

            setCurrentRank(rank);
            setCurrentRankImage(selectedRank ? imageMap[selectedRank.imageUrl] : '');
            setDesiredRank('');
            setDesiredRankImage('');
        } else {
            if (!currentRank) {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Por favor, selecciona primero tu rango actual.',
                    color: '#fff',
                    background: '#191a19',
                    confirmButtonColor: '#25D366',
                });
                return;
            }

            if (rankOrder.indexOf(rank) <= rankOrder.indexOf(currentRank)) {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'El rango deseado no puede ser menor ni igual que el rango actual.',
                    color: '#fff',
                    background: '#191a19',
                    confirmButtonColor: '#25D366',
                });
                return;
            }

            setDesiredRank(rank);
            setDesiredRankImage(selectedRank ? imageMap[selectedRank.imageUrl] : '');
        }
    };

    const handleModeSelection = (selectedMode) => {
        setMode(selectedMode);
    };

    const sendWhatsAppMessage = () => {
        if (currentRank && desiredRank && mode) {
            const message = `Hola! Estoy interesado en un Eloboost de League Of Legends. Mi rango actual es ${currentRank}, quiero ser eloboosteado a ${desiredRank} en el modo ${mode}.`;
            const phoneNumber = '56978737251';
            const whatsappURL = `https://api.whatsapp.com/send/?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

            window.open(whatsappURL, '_blank');
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Por favor, selecciona tu rango actual, rango deseado y el modo de juego.',
                color: '#fff',
                background: '#191a19',
                confirmButtonColor: '#25D366',
            });
        }
    };

    return (
        <>
            <Header />

            <div className="cardPrecios mt-4 p-2 container text-center">
                <p className="container text-light mt-4">
                    Entendemos que puede ser tedioso revisar los precios de los productos que deseas adquirir, especialmente considerando la variedad de rangos y combinaciones disponibles. Para facilitar el proceso y brindarte una mejor experiencia, te invitamos a contactarnos directamente con tus consultas. Estaremos encantados de responder a tus preguntas de manera rápida y ofrecerte una atención personalizada para asegurar tu completa satisfacción.
                </p>
                <Link to="/#metodosdepago" className="text-decoration-none">
                    <b>Ver nuestros métodos de pago</b>
                </Link>
            </div>

            <div className="container mt-5 text-light text-center">
                <h2>¡Elige tu Rango de EloBoost en League Of Legends!</h2>
                <div className="d-flex justify-content-center mb-5 pb-3">
                    <hr className="w-50" />
                </div>

                {/* Selector de Rango Actual */}
                <div className="rank-selector gap-3">
                    <h4>Rango Actual:</h4>
                    <div className="custom-select" onClick={() => document.getElementById('current-rank-options').classList.toggle('show')}>
                        <div className="selected-rank bg-dark text-light w-100 d-flex justify-content-center">
                            {currentRankImage && <img src={currentRankImage} alt={currentRank} />}
                            <b>{currentRank || 'Selecciona tu rango actual'}</b>
                        </div>
                        <ul id="current-rank-options" className="rank-options bg-dark w-100">
                            {rankLeagueOfLegends.map(rank => (
                                <li key={rank.id} onClick={() => handleRankSelection(rank.name, true)}>
                                    <img src={imageMap[rank.imageUrl]} alt={rank.name} />
                                    <span>{rank.name}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Selector de Rango Deseado */}
                    <div className="custom-select text-light mt-5" onClick={() => document.getElementById('desired-rank-options').classList.toggle('show')}>
                        <h4>Rango Deseado:</h4>
                        <div className="selected-rank bg-dark w-100 d-flex justify-content-center">
                            {desiredRankImage && <img src={desiredRankImage} alt={desiredRank} />}
                            <b>{desiredRank || 'Selecciona tu rango deseado'}</b>
                        </div>
                        <ul id="desired-rank-options" className="rank-options bg-dark w-100">
                            {rankLeagueOfLegends.map(rank => (
                                <li key={rank.id} onClick={() => handleRankSelection(rank.name, false)}>
                                    <img src={imageMap[rank.imageUrl]} alt={rank.name} />
                                    <span>{rank.name}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Selector de Modo de Juego */}
                    <div className="game-mode-selector text-light mt-5">
                        <h4>Modo de Juego:</h4>
                        <div className="d-flex justify-content-center gap-3">
                            <button className={`btn w-50 p-3 borderRankLol ${mode === 'Solo/Duo' ? 'btn-success' : 'btn-dark'}`} onClick={() => handleModeSelection('Solo/Duo')}>
                                Solo/Duo <i class="fi fi-rr-user-add"></i>
                            </button>
                            <button className={`btn w-50 p-3 borderRankLol ${mode === 'Flexible' ? 'btn-success' : 'btn-dark'}`} onClick={() => handleModeSelection('Flexible')}>
                                Flexible <i class="fi fi-ts-employees"></i>
                            </button>
                        </div>
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
