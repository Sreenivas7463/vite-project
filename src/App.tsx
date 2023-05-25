import Lottie from "lottie-react"
import animationData from "./assets/system.json"
import welcomeData from "./assets/welcome.json"
import { InboxIcon, DevicePhoneMobileIcon } from '@heroicons/react/24/solid'
import './App.css'
import Card from '../components/Card'

function App() {
 
  return (
    <div className="App">
      <Lottie animationData={welcomeData} />
     <section className="card-container">
     
        <Card
          body= 'I am Having 5+ Yrs of Experience in WebDevelopment and WebDesigning. PHP, MySQL, WordPress, Codeigniter and Bootstrap Framework'
          title='T. Sreenivasulu'
          image='https://source.unsplash.com/random/?WebDevelopment'
          badge={{
            text: "T. Sreenivasulu",
            filled: false,
          }}
          indicator=""
          subtitle='WebDeveloper'
          btn0={{
           
            text: "E-Mail",
            href: 'mailto:sreenivasadyourworld@gmail.com',
            type: 'secondary',
            filled: true,
            icon: <InboxIcon />,
            
          }}
          btn={{
            
            text: "Contact",
            href: 'tel:9032446465',
            type: 'secondary',
            filled: true,
            icon: <DevicePhoneMobileIcon  />
           
            
          }} 

          ani= {{ 
            animation0: <Lottie animationData={animationData} /> 
          }} 
          
          />

        
          
       
      </section>
    
    
    </div>
  )
}

export default App
