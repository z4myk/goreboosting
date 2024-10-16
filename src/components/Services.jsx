import React from 'react'
import {Link} from 'react-router-dom'
import counterstrike from '../assets/counterstrike.jpg'
import leagueoflegend from '../assets/leagueoflegend.jpg'
import valorant from '../assets/valorant.jpg'
export const Services = () => {
    return (
        <section className=" container pt-5 mb-5 mt-5 pb-5" id="servicios">
            <h2 className="text-center text-light ">Nuestros Servicios</h2>

            <div className="d-flex justify-content-center ">

            <hr className="w-50"/>
            </div>
            <div className="d-flex justify-content-around gap-5 mt-5 pb-5 flex-wrap  ">
                    <div className="">
                        <img src={valorant} className="cardValorant  rounded shadow" alt="Valorant" />
                        <div class="button-borders mt-3  w-100 ">
                          <Link to="/eloboost-valorant">
                      <button class="primary-button w-100 "> ELOBOOST VALORANT</button>
                          </Link>
                    </div>
                    </div>

                    <div className="">
                        <img src={counterstrike} className="cardCounter rounded  shadow" alt="Counter Strike 2" />
                        <br />
                        <div class="button-borders mt-3 w-100 ">
                            <Link to="eloboost-counterstrike2">
                      <button class="primary-button w-100"> ELOBOOST COUNTER STRIKE 2</button>
                            </Link>
                    </div>
                    </div>


                    <div class="">
                        <img src={leagueoflegend} className="cardLeague rounded shadow" alt="League Of Legends" />
                        <div class="button-borders mt-3 w-100 ">
                          <Link to="/eloboost-leagueoflegends">
                      <button class="primary-button w-100"> ELOBOOST LEAGUE OF LEGENDS</button>
                          </Link>
                    </div>
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
