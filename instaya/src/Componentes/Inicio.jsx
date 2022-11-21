import React, { Component } from 'react';
import { Link, Outlet } from "react-router-dom"

class Inicio extends Component {
    state = {  } 
    render() { 
        return (                  
            <div class="card-body">
                
               
                <button className= "btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                    <Link className='nav-link' to="/Registro">Registro</Link>
                </button>
                <button className= "btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                        <Link className='nav-link' to="/Iniciar_sesion">Iniciar sesion</Link>
                </button> 
                
                        
            </div>
            
        );
    }
}
 
export default Inicio;