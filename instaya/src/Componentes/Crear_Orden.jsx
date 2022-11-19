import React, { Component } from 'react';
class Crear_Orden extends Component {
    state = {  } 
    render() { 
        return (
            <form>
            <fieldset>
              <legend >Creación de Orden</legend>
              <div class="form-group">
                <label for="exampleSelect1" class="form-label mt-4">Hora</label>
                <select class="form-select" id="exampleSelect1">
                    <option>6:00</option>
                    <option>7:00</option>
                    <option>8:00</option>
                    <option>9:00</option>
                    <option>10:00</option>
                    <option>11:00</option>
                    <option>12:00</option>
                    <option>13:00</option>
                    <option>14:00</option>
                    <option>15:00</option>
                    <option>16:00</option>
                    <option>17:00</option>
                    <option>18:00</option>
                    <option>19:00</option>
                    <option>20:00</option>
                    <option>21:00</option>
                </select>
                </div>
                <div class="form-group">
                <label for="exampleSelect1" class="form-label mt-4">Estado</label>
                <select class="form-select" id="exampleSelect1">
                    <option>Guardado</option>
                    <option>Cumplido</option>
                    <option>Cancelado</option>
                    
                </select>
                </div>
              <div class="form-group">
                  <label class="col-form-label mt-4" for="inputDefault">Largo</label>
                  <input type="text" class="form-control" placeholder="cm" id="inputDefault"/>
              </div>
              <div class="form-group">
                  <label class="col-form-label mt-4" for="inputDefault">Ancho</label>
                  <input type="text" class="form-control" placeholder="cm" id="inputDefault"/>
              </div>
              <div class="form-group">
                  <label class="col-form-label mt-4" for="inputDefault">Alto</label>
                  <input type="text" class="form-control" placeholder="cm" id="inputDefault"/>
              </div>
              <div class="form-group">
                  <label class="col-form-label mt-4" for="inputDefault">Peso</label>
                  <input type="text" class="form-control" placeholder="Kg" id="inputDefault"/>
              </div>
              <div class="form-group">
                  <label class="col-form-label mt-4" for="inputDefault">Dirección recogida</label>
                  <input type="text" class="form-control" placeholder="" id="inputDefault"/>
              </div>
              <div class="form-group">
                  <label class="col-form-label mt-4" for="inputDefault">Ciudad de recogida</label>
                  <input type="text" class="form-control" placeholder="" id="inputDefault"/>
              </div>
              <div class="form-group">
                  <label class="col-form-label mt-4" for="inputDefault">Nombre del destinatario</label>
                  <input type="text" class="form-control" placeholder="" id="inputDefault"/>
              </div>
              <div class="form-group">
                  <label class="col-form-label mt-4" for="inputDefault">Cédula/Nit del destinatario</label>
                  <input type="text" class="form-control" placeholder="" id="inputDefault"/>
              </div>
              <div class="form-group">
                  <label class="col-form-label mt-4" for="inputDefault">Dirección de entrega</label>
                  <input type="text" class="form-control" placeholder="" id="inputDefault"/>
              </div>
              <div class="form-group">
                  <label class="col-form-label mt-4" for="inputDefault">Ciudad de recogida</label>
                  <input type="text" class="form-control" placeholder="" id="inputDefault"/>
              </div>
              <button type="submit" class="btn btn-primary">Crear</button>
              </fieldset>       
              </form> 
        );
    }
}
 
export default Crear_Orden;