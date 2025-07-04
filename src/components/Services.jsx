import React from 'react'
import {Link} from 'react-router-dom'
import counterstrike from '../assets/counterstrike.jpg'
import optimizacion from "../assets/optimizacion.jpg";
import leagueoflegend from '../assets/leagueoflegend.jpg'
import valorant from '../assets/valorant.jpg'
import coaching from "../assets/coaching.jpg";
export const Services = () => {
    return (
        <section className=" container pt-5 mb-5 mt-5 pb-5" id="servicios">
            <h2 className="text-center text-light ">Mis Servicios</h2>

            <div className="d-flex justify-content-center ">

            <hr className="w-50"/>
            </div>
            <div className="d-flex justify-content-around gap-5 mt-5 pb-5 flex-wrap ">
                    <div className="">
                          <Link to="/eloboost-valorant">
                        <img src={valorant} className="cardValorant  rounded shadow" alt="Valorant" />
                        <div class="button-borders mt-3 w-100 ">
                      <button class="primary-button w-100 "> ELOBOOST VALORANT</button>
                    </div>
                          </Link>
                    </div>

                    <div className="">
                            <Link to="/coaching#coaching">
                        <img src={coaching} className="cardCounter rounded  shadow" alt="Counter Strike 2" />
                        <br />
                        <div class="button-borders mt-3 w-100 ">
                      <button class="primary-button w-100"> COACHING VALORANT</button>
                    </div>
                            </Link>
                    </div>


                    <div class="">
                          <Link to="/optimizacion-para-pc#optimizacion">
                        <img src={optimizacion} className="cardLeague rounded shadow" alt="League Of Legends" />
                        <div class="button-borders mt-3 w-100 ">
                      <button class="primary-button w-100"> OPTIMIZACIÓN PC</button>
                    </div>
                          </Link>
                    </div>
            </div>

            <div className="d-flex justify-content-center  pt-5 mt-2 ">

<div class="scrolldown bgScroll" >
<div class="chevrons">
<div class="chevrondown"></div>
<div class="chevrondown"></div>
</div>
</div>
</div>
        </section>
    )
}
