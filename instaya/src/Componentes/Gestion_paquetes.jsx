import React, { Component } from 'react';

class  Gestion_paquetes extends Component {
    state = {  } 
    render() { 
        return (
            
            <table class="table table-hover">
                <legend >Listado de ordenes</legend>
                <button type="button" class="btn btn-link">Crear orden</button>
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