import React from 'react';
import './Contact.css';

const Contact = () => {
    return ( 
        <form>
            <legend>Formulario de Contacto</legend>
            <div className="input-field">
                <label>Nombre: </label>
                <input type="text" placeholder="Nombre Completo"/>

            </div>
            <div className="input-field">
                <label>Email: </label>
                <input type="email" placeholder="nombre@email.com"/>

            </div>
            <div className="input-field">
                <label>Mensaje: </label>
                <textarea></textarea>  

            </div>
            <div className="input-field enviar">
                <input type="submit" value="Enviar"/>
            </div> 
        </form>
     );
}
 
export default Contact;
