import React, {useEffect} from "react";
import chile from '../assets/chile.png'
import argentina from '../assets/argentina.png'
import peru from '../assets/peru.png'
import internacional from '../assets/internacional.png'
import banktransfer from '../assets/banktransfer.png'
import binance from '../assets/binance.png'
import paypal from '../assets/paypal.png'
import mercadopago from '../assets/mercadopago.png'
import yape from '../assets/yape.png'
import plin from '../assets/plin.png'
export const PaymentMethod = () => {


  useEffect(() => {
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    tooltipTriggerList.forEach((tooltipTriggerEl) => {
      new bootstrap.Tooltip(tooltipTriggerEl);
    });
  }, []);

  return (
    <section className="mt-5 pt-3 container text-light pb-5">
      <h2 className="text-light text-center" id="metodosdepago">Métodos De Pago</h2>

      <div className="d-flex justify-content-center">
        <hr className="w-50" />
      </div>

      <div className="d-flex justify-content-around text-center flex-wrap gap-3 mt-4">
            <div className="border p-4 glass-card" >
                <img src={chile} className="w-25"  />
                <h4 >Chile</h4>

                <div className="text-center">
                  <div className=" mb-2">
                <img src={banktransfer} className="iconoArgentina"  />
                <p><i>Transferencia <br/> bancaria</i></p>
                  </div>
                </div>
            
             

            </div>
            <div className="border p-4 glass-card">
            <img src={argentina} className="w-25 mt-2"  />
                <h4 className="">Argentina</h4>

                <div className="text-center">
                  <div className=" mb-2">
                <img src={mercadopago} className="w-50"  />

                  </div>
                </div>

            </div>
            <div className="border p-4 glass-card">
            <img src={peru} className="w-25 "  />
                <h4>Perú</h4>

  <div className="d-flex justify-content-center">
<div className="text-center">


                  <div className=" mb-2">
                <img src={yape} className="w-50 rounded-5 mt-3"  />

                  </div>
                </div>

                <div className="text-center">
                  <div className=" mb-2">
                <img src={plin} className="w-50 rounded-5 mt-3"  />

                  </div>
                </div>
  </div>
                <div className="text-center">
                  <div className=" mb-2">
                <img src={banktransfer} className="iconoArgentina"  />
                <p><i>Transferencia <br/> bancaria</i></p>
                  </div>
                </div>


            </div>
            <div className="border p-4 glass-card" >
            <img src={internacional} className="w-25 mt-2"  />
                <h4 className="">Internacional</h4>
            <div className="row">
              <div className="col-sm-12 col-md-12">

                  <div className="">
                <img src={binance} className="iconoPaypal"  />
                <i class="fi fi-ts-diamond-exclamation text-warning" data-bs-toggle="tooltip" data-bs-placement="bottom" title="USDT Tether"></i>
                  </div>
             
                  <div className="">
                <img src={paypal} className="iconoPaypal"  />
                <i class="fi fi-ts-diamond-exclamation text-warning ms-2" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Se debe pagar una comisión si se elije este metodo."></i>
                  </div>
              </div>
            </div>
              


                

            </div>

      </div>
    </section>
  );
};
