import React, { Component } from 'react';
import { Link, Outlet } from "react-router-dom"

class Acciones extends Component {
    state = {  } 
    render() { 
        return (                  
            <div class="card-body">
                
               
                <button className= "btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                    <Link className='nav-link' to="/Crear_Orden">Crear orden</Link>
                </button>
                <button className= "btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                        <Link className='nav-link' to="/Actualizar_Orden">Actualizar orden</Link>
                </button> 
                
                        
            </div>
            
        );
    }
}
 
export default Acciones;