import React from 'react'
import fondo from '../assets/fondo.jpg'
export const Contact = () => {
    return (
        <>
            <section className="container pt-5 mb-5 pb-5">
            <h2 className="text-center text-light">Contactanos</h2>
            <div className="d-flex justify-content-center mb-4">
                <hr className="w-50" />
            </div>

            <div className="d-flex justify-content-center gap-5 mb-4">


         
               

                <div className="cardFooter mx-3 text-center d-flex justify-content-center gap-4">
                  <a
                    className="socialContainer text-decoration-none containerOne"
                    target="_blank"
                    href="http://instagram.com/goreboosting_oficial"
                  >
                    <i
                      class="fi fi-brands-instagram rounded text-light socialSvg"
                      aria-hidden="true"
                    ></i>
                  </a>

                  <a
                    className="socialContainer text-decoration-none containerThree"
                    target="_blank"
                    href="https://api.whatsapp.com/send/?phone=56978737251&text=Hola%21+me+interesa+el+servicio+de+Eloboosting+%F0%9F%99%82"
                  >
                    <i class="fi fi-brands-whatsapp text-light socialSvg "></i>
                  </a>
                  <a
                    className="socialContainer text-decoration-none containerFour"
                    target="_blank"
                    href="http://discord.gg/invite/goreboosting"
                  >
                    <i class="fi fi-brands-discord iconDiscord  text-light mx-5 socialSvg"></i>
                  </a>
                  <a
                    className="socialContainer text-decoration-none containerFive"
                    target="_blank"
                    href="http://facebook.com/goreboosting"
                  >
                    <i class="fi fi-brands-facebook text-light socialSvg"></i>
                  </a>
                </div>
       

                </div>


                


                <div className="text-center text-light container ">
                   

    <p className="mt-3">Contáctenos a través del Chat en Vivo o complete este formulario.</p>

    <form className="d-flex flex-column align-items-center">
        <div className="p-2 w-75 mb-2">
           
            <input className="form-control bg-dark borderInputs p-2 text-light" placeholder="Nombre" type="text" />
        </div>

        <div className="p-2 w-75 mb-2">
            <input className="form-control bg-dark borderInputs p-2 text-light" placeholder="Email" type="email" />
        </div>

        <div className="p-2 w-75 mb-2">
           <textarea className="bg-dark form-control borderInputs text-light" placeholder="Mensaje" rows="4"></textarea>
        </div>

        <button className="btn btn-success w-50 p-2">Enviar</button>
    </form>
                        </div>
  



            </section>
        </>
    )
}
