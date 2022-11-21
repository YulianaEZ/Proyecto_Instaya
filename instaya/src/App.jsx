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
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Acciones from './Componentes/Acciones';




function App() {
  const [count, setCount] = useState(0)
  
  return (
    
    
    <div className="App"> 
      <BrowserRouter>
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
            <Routes>
              <Route path="/Inicio" element={ <Inicio/> } />
              <Route path="/Registro" element={ <Registro/> } />
              <Route path="/Iniciar_sesion" element={ <Iniciar_sesion/>} />
              <Route path="/Acciones" element={ <Acciones/>} />
              <Route path="/Gestion_paquetes" element={ <Gestion_paquetes/>} />
              <Route path="/Crear_Orden" element={<Crear_Orden/>} />
              <Route path="/Actualizar_Orden" element={<Actualizar_Orden/>} />
            </Routes> 
        
      </BrowserRouter>
    

    </div>
    

  )
}

export default App
