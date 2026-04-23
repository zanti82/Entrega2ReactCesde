import { useState } from "react";
import "../styles/contactoPage.css"
import { getLocalSotarge, saveLocalStorage } from "../helpers/local-storage";
import { redirectAlert } from "../helpers/alerts";

const ContactoPage = () => {


  const[nombre, setNombre]=useState("")
  const[email, setEmail]=useState("")
  const[mensaje, setMensaje]=useState("")
  const[opcion, setOpcion]=useState("")

  const handleSubmit =(e)=>{
    e.preventDefault();

    const mensajeEnviado={
      nombre,
      email,
      opcion,
      mensaje,
    }

    
    console.log(mensajeEnviado)

    //LIMPIAR FORM
  setNombre("");
  setEmail("");
  setOpcion("");
  setMensaje("");

  saveLocalStorage("mensaje",mensajeEnviado);
  redirectAlert("mensaje de: "+mensajeEnviado.mensaje,"sera direccionado al panel principal en","success","/" )

  }

  
  


    return (
      <main className="contact-page">
        <h1 className="contact-title">Tienes alguna pregunta? Nos encantaria escucharte  </h1>

        <div className="columns-contenedor">

          <div className="contenedor-info">
            <div className="item">
              <h3>DIRECCION</h3> 
              <p>Calle Urban Style 123
              28001 Madrid, España </p>
            </div>
            <div className="item">
              <h3>TELEFONO</h3>
              <p>C+34 91 123 45 67 </p>
            </div>
            <div className="item">
              <h3>EMAIL</h3>
              <p>info@urbanthreads.com </p>
            </div>
            <div className="item">
              <h3>CONTACTO</h3>
              <p>Lun - Vie: 9:00 - 1Calle Urban Style 123
               </p>
            </div>
          </div> 

          <form className="contact-form"
            onSubmit={handleSubmit}>
            
            <div className="form-group">
              <label>Nombre</label>
              <input type="text" placeholder="Tu nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)} />
            </div>
    
            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="Tu correo"
              value={email}
               onChange={(e) => setEmail(e.target.value)}/>
            </div>

            <div className="form-group">
              <label htmlFor="asunto">Motivo de contacto</label>
              
              <select 
                  value={opcion}
                  onChange={(e) => setOpcion(e.target.value)}>
                <option value="">Selecciona una opción</option>
                <option value="info">Información general</option>
                <option value="pedido">Estado del pedido</option>
                <option value="devolucion">Devoluciones</option>
              </select>
            </div>
    
            <div className="form-group">
              <label>Mensaje</label>
              <textarea placeholder="Escribe tu mensaje"
              value={mensaje}
              onChange={(e) => setMensaje(e.target.value)}></textarea>
            </div>
    
            <button type="submit" className="btn-send">
              Enviar mensaje
            </button>
    
          </form>

        </div>
        
      </main>
    );
  };
  
  export default ContactoPage;