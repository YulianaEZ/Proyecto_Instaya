import React, { Component } from 'react';
import { Link, Outlet } from "react-router-dom"

class  Gestion_paquetes extends Component {
    state = {  } 
    render() { 
        return (
            
            <table class="table table-hover">
                <legend >Listado de ordenes</legend>
                <button className= "btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                        <Link className='nav-link' to="/Crear_Orden">Crear orden</Link>
                </button> 
                <button className= "btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                        <Link className='nav-link' to="/Actualizar_Orden">Actualizar orden</Link>
                </button> 
                <tbody>
                
                <tr class="table-active">
                    <td class="nav-link active" aria-current="page" href="#"># Servicio</td>
                    <td>Fecha</td>
                    <td>Ciudad de entrega</td>
                    <td>Dirección de entrega</td>
                    <td>Estado</td>
                </tr>
                
                </tbody> 
            
            
            
          </table>
        );
    }
}
 
export default Gestion_paquetes;