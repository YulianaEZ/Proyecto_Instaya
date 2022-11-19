import { useState } from 'react'
import { Player } from '@lottiefiles/react-lottie-player';
import reactLogo from './assets/react.svg'
import './App.css'
import Inicio from './Componentes/Inicio'
import Registro from './Componentes/Registro';
import Iniciar_sesion from './Componentes/Iniciar_sesion';
import Gestion_paquetes from './Componentes/Gestion_paquetes';
import Crear_Orden from './Componentes/Crear_orden';
import Actualizar_Orden from './Componentes/Actualizar_Orden';




function App() {
  const [count, setCount] = useState(0)
  
  return (
    <div className="container"> 
         
        <h1 className="fs-1 text-center">
          <a>InstaYa</a> 
          </h1>
          <h2><a className="fs-6 text-center">Gestión de paquetes</a></h2>
          
        <Inicio/>  
        <Player 
          src='https://lottie.host/f1b6f4a6-7588-48b1-a3fa-4a6e78351d77/Ttpy0z3AmB.json' 
          className="player"
          loop
          autoplay/> 
        <Registro/> 
        <Iniciar_sesion/>
        <Gestion_paquetes/>
        <Crear_Orden/>
        <Actualizar_Orden/>
        
    

    </div>

  )
}

export default App
