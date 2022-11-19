import React, { Component } from 'react';
class  Iniciar_sesion extends Component {
    state = {  } 
    render() { 
        return (
            <form>
  <fieldset>
  <legend >Iniciar Sesion</legend>
  <button type="button" class="btn btn-link">Registro</button>
    <div class="form-group">
        <label class="col-form-label mt-4" for="inputDefault">Usuario</label>
        <input type="text" class="form-control" placeholder="Nombre de usuario" id="inputDefault"/>
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1" class="form-label mt-4">Contraseña</label>
      <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
    </div>
    <button type="submit" class="btn btn-primary">login</button>
    </fieldset>       
    </form>  
        );
    }
}
 
export default Iniciar_sesion;