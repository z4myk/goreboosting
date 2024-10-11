import React, {useEffect} from 'react'

import { useLocation } from 'react-router-dom';
import { AboutUs } from '../AboutUs'
import { Contact } from '../Contact'
import { Header } from '../Header'
import { HowWeCanHelp } from '../HowWeCanHelp'
import { PaymentMethod } from '../PaymentMethod'
import { Services } from '../Services'
import { Testimonials } from '../Testimonials'

export const HomePage = () => {




    const location = useLocation();

    useEffect(() => {
      if (location.hash) {
        const element = document.querySelector(location.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }, [location]);

    return (
        <section className="">
           <Header />
           <AboutUs />
           <HowWeCanHelp />
           <PaymentMethod />
           <Services />
           <Testimonials />
           <Contact />
        </section>
    )
}
