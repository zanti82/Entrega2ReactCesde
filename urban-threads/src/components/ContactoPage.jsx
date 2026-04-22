import "./contactoPage.css"

const ContactoPage = () => {
    return (
      <main className="contact-page">
        <h1 className="contact-title">Contáctanos</h1>
  
        <form className="contact-form">
          
          <div className="form-group">
            <label>Nombre</label>
            <input type="text" placeholder="Tu nombre" />
          </div>
  
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Tu correo" />
          </div>
  
          <div className="form-group">
            <label>Mensaje</label>
            <textarea placeholder="Escribe tu mensaje"></textarea>
          </div>
  
          <button type="submit" className="btn-send">
            Enviar mensaje
          </button>
  
        </form>
      </main>
    );
  };
  
  export default ContactoPage;