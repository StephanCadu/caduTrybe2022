import React from "react";

class MyForm extends React.Component {
  render() {
    return(
      <form id="myForm">
        <fieldset id="personalDataField">

          <h1>Let me know you</h1>

          {/* CAMPO INPUTS INÍCIO */}
          
          {/* transformar caracteres em upper case */}
          <label htmlFor="email">E-mail</label>
          <input type="text" id="email" name="email" maxLength="40" required />
          
          <label htmlFor="password">Password</label>
          <input type="text" name="password" maxLength="50" required />
          
          <label htmlFor="CPF">CPF</label>
          <input type="text" id="CPF" name="CPF" maxLength="11" required />
          
          <label htmlFor="adress">Adress</label>
          {/* remover caracterers especiais */}
          <input type="text" id="adress" name="adress" maxLength="200" required />
          
          <label htmlFor="city">City</label>
          {/* onBlur se iniciar com número limpar campo */}
          <input type="text" id="city" name="city" maxLength="28" required />

          {/* CAMPO INPUTS FIM */}

          {/* CAMPO SELECT INÍCIO */}

          <select name="state" id="stateSelect">
            {/* todos os estados do Brasil (dinamicamente?) */}
          </select>

          {/* CAMPO SELECT FIM */}
          
          {/* CAMPO RADIO BUTTON INÍCIO */}
          
          <label htmlFor="house">House</label>
          <input type="radio" id="house" name="homeType" value="House" required ></input>

          <label htmlFor="apartament">Apartament</label>
          <input type="radio" id="apartament" name="homeType" value="apartament" ></input>
          
          {/* CAMPO RADIO BUTTON FIM */}
        
        </fieldset>
      </form>
    );
  }
}

export default MyForm;
