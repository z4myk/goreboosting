import React, {useState} from 'react'

import emailjs from '@emailjs/browser';

import Swal from 'sweetalert2';
export const Contact = () => {

  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      import.meta.env.VITE_EMAIL_SERVICE_ID, 
      import.meta.env.VITE_EMAIL_TEMPLATE_ID, 
      e.target, 
      { publicKey: import.meta.env.VITE_EMAIL_USER_ID }
  )
  .then((result) => {
      Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'El email se ha enviado con éxito!',
          color: '#fff',
          background: '#191a19',
          showConfirmButton: false,
          timer: 1500
      });
  
      setNombre('');
      setEmail('');
      setMensaje('');
  }, (error) => {
      console.log(error.text);
  });
  
  e.target.reset();
};


    return (
        <>
            <section className="container pt-5 mb-5 pb-5">
            <h2 className="text-center text-light" id="contactanos">Contactame</h2>
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
                     <span class="visually-hidden">Instagram</span>
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
                     <span class="visually-hidden">Whatsapp</span>
                    <i class="fi fi-brands-whatsapp text-light socialSvg "></i>
                  </a>
                  <a
                    className="socialContainer text-decoration-none containerFour"
                    target="_blank"
                    href="http://discord.gg/invite/goreboosting"
                  >
                     <span class="visually-hidden">Discord</span>
                    <i class="fi fi-brands-discord iconDiscord  text-light mx-5 socialSvg"></i>
                  </a>
                  <a
                    className="socialContainer text-decoration-none containerFive"
                    target="_blank"
                    href="http://facebook.com/goreboosting"
                  >
                     <span class="visually-hidden">Facebook</span>
                    <i class="fi fi-brands-facebook text-light socialSvg"></i>
                  </a>
                </div>
       

                </div>


                


                <div className="text-center text-light container ">
                   

    <p className="mt-3">Contáctame a través del Chat en Vivo o complete este formulario.</p>

    <form className="d-flex flex-column align-items-center" onSubmit={sendEmail}>
        <div className="p-2 w-75 mb-2">
           
            <input className="form-control bg-dark borderInputs p-2 text-light" type="text" value={nombre} name="name" placeholder="Nombre" onChange={(e) => setNombre(e.target.value)} required/>
        </div>

        <div className="p-2 w-75 mb-2">
            <input className="form-control bg-dark borderInputs p-2 text-light" placeholder="Email" type="email" value={email} name="email" onChange={(e) => setEmail(e.target.value)} required/>
        </div>

        <div className="p-2 w-75 mb-2">
           <textarea className="bg-dark form-control borderInputs text-light" rows="4" value={mensaje} name="message" placeholder="Mensaje..." onChange={(e) => setMensaje(e.target.value)} required></textarea>
        </div>

        <button className="btn btn-success w-75  p-2" type="submit">Enviar</button>
    </form>
                        </div>
  



            </section>
        </>
    )
}
