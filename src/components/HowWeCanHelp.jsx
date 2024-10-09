import React from 'react';
import cohete from '../assets/cohete.png'
import estadisticas from '../assets/estadisticas.png'
import anonimato from '../assets/anonimato.png'
import destello from '../assets/destello.png'
import regalo from '../assets/regalo.png'
import cheque from '../assets/cheque.png'
export const HowWeCanHelp = () => {
    return (
        <div className="pb-2">
            <section className="triangle p-5 mb-5">
                <div className="text-center mb-5" id="nosotros">
                    <h2 className="text-light ">¿Cómo ayudamos?</h2>
                    <div className="d-flex justify-content-center ">

<hr className="w-50"/>
</div>
                </div>

                <div className="d-flex flex-wrap justify-content-around">
                    <div className="help-card text-center">
                        <img src={cohete} className="w-25" />
                        <p className="text-light "><b>Subimos tu MMR Interno (Valorant/LOL/CS2)</b></p>
                        <p className="small text-light textoContraste">Gracias a las victorias amplias y el buen desempeño, tu MMR interno sube, haciendo que en un futuro te toque gente más competente ya sea en tu equipo como en el equipo rival.</p>
                    </div>

                    <div className="help-card text-center">
                    <img src={estadisticas} className="w-25" />
                        <p className="text-light"><b>Estadísticas</b></p>
                        <p className="small text-light textoContraste">Por las victorias ya antes mencionadas, tus estadísticas en tu cuenta, suben y quedan mejoradas.</p>
                    </div>

                    <div className="help-card text-center">
                    <img src={anonimato} className="w-25" />
                        <p className="text-light"><b>Anonimato</b></p>
                        <p className="small text-light textoContraste">Todo lo hacemos bajo lo anónimo, no publicamos tu nombre, ni tu número de ranking en el caso de que lo tengas, jamás en todas las cuentas han baneado a un usuario por "boosting", ya que no damos “say” en el juego, ni publicamos nada con los nombres de los clientes ni las cuentas, en ningún tipo de juego.</p>
                    </div>
                </div>
                    <div className="d-flex justify-content-around flex-wrap mt-4">

                  

                    <div className="help-card text-center">
                    <img src={destello} className="w-25" />
                        <p className="text-light"><b>Rapidez</b></p>
                        <p className="small text-light textoContraste">Tenemos victorias amplias y aplastantes, no importa el rango, esto hace el proceso mucho más rápido y es por eso que goreboosting es tan solicitado a la hora de elegir el servicio de eloboost.</p>
                    </div>

                    <div className="help-card text-center">
                    <img src={regalo} className="w-25" />
                        <p className="text-light"><b>Regalos extras</b></p>
                        <p className="small text-light textoContraste">¿Necesitas la animación del “rank up” cuando llegues a tu rango soñado? o algún par de clips o “foto de la carrera” no hay problema, en GoreBoosting no cobramos un extra por este tipo de peticiones.</p>
                    </div>

                    <div className="help-card text-center">
                    <img src={cheque} className="w-25" />
                        <p className="text-light"><b>Buen comportamiento</b></p>
                        <p className="small text-light textoContraste">Somos profesionales en lo que hacemos, y lo tratamos con seriedad. Al momento de jugar en la cuenta del cliente, muteamos al equipo enemigo, ocultamos nombre y solo ganamos. No damos espacio a la toxicidad, ya que nos hacemos responsables de sus preciadas cuenta.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
