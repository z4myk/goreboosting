import React from 'react'
import { AboutUs } from '../AboutUs'
import { Contact } from '../Contact'
import { Header } from '../Header'
import { HowWeCanHelp } from '../HowWeCanHelp'
import { PaymentMethod } from '../PaymentMethod'
import { Services } from '../Services'
import { Testimonials } from '../Testimonials'

export const HomePage = () => {
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
