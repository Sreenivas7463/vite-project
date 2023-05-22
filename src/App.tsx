import React from "react";
import { InboxIcon, DevicePhoneMobileIcon } from '@heroicons/react/24/solid'
import './App.css'
import Card from '../components/Card'

function App() {
 
  return (
    <div className="App">
      <section className="card-container">
       
        <Card
          body='I am Having 5+ Yrs of Experience in WebDevelopment and WebDesigning. PHP, MySQL, WordPress, Codeigniter and Bootstrap Framework'
          title='T. Sreenivasulu'
          image='https://source.unsplash.com/random/?WebDevelopment'
          badge={{
            text: "T. Sreenivasulu",
            filled: false,
          }}
          indicator=""
          subtitle='WebDeveloper'
          btn0={{
            icon: <InboxIcon />,
            text: "E-Mail",
            href: 'mailto:sreenivasadyourworld@gmail.com',
            type: 'secondary',
            filled: true
            
          }}
          btn={{
            icon: <DevicePhoneMobileIcon />,
            text: "Contact",
            href: 'tel:9032446465',
            type: 'secondary',
            filled: true
            
          }} />
      
      </section>
    </div>
  )
}

export default App
