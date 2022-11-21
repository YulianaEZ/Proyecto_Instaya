import React, { Component } from 'react';
import { Link, Outlet } from "react-router-dom"

class  Iniciar_sesion extends Component {
    state = {  } 
    render() { 
        return (
            <form>
  <fieldset>
  <legend >Iniciar Sesion</legend>
  <button className= "btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                    <Link className='nav-link' to="/Registro">Registro</Link>
                </button>
    <div class="form-group">
        <label class="col-form-label mt-4" for="inputDefault">Usuario</label>
        <input type="text" class="form-control" placeholder="Nombre de usuario" id="inputDefault"/>
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1" class="form-label mt-4">Contraseña</label>
      <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
    </div>
    <button className= "btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                    <Link className='nav-link' to="/Acciones">Login</Link>
                </button>
    </fieldset> 
          
    </form>  
        );
    }
}
 
export default Iniciar_sesion;