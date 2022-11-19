import React, { Component } from 'react';


class Registro extends Component {
    state = {  } 
    render() { 
        return (

            <form>
  <fieldset>
    <legend >Registro</legend>
    <div class="form-group">
        <label class="col-form-label mt-4" for="inputDefault">Nombre Completo</label>
        <input type="text" class="form-control" placeholder="Ingrese su nombre completot" id="inputDefault"/>
    </div>
    <div class="form-group">
        <label class="col-form-label mt-4" for="inputDefault">Usuario</label>
        <input type="text" class="form-control" placeholder="Nombre de usuario" id="inputDefault"/>
    </div>
    <div class="form-group">
      <label for="exampleInputEmail1" class="form-label mt-4">Correo electrónico</label>
      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="email@example.com"/>
      <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1" class="form-label mt-4">Contraseña</label>
      <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1" class="form-label mt-4">Confirmar contraseña</label>
      <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Confirmar Password"/>
    </div>
    <button type="submit" class="btn btn-primary">Crear</button>
    </fieldset>       
    </form>  
        );
    }
}
 
export default Registro;

