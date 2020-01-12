import React from 'react';
import fondoMaps from '../../../Img/fondoMaps.png'

function ArticleMaps(){
  return(
    <div className="container-maps"
         data-aos="fade-right"
         data-aos-offset="100"
         data-aos-easing="ease-in-sine"
         data-aos-delay="250">
      <div className="container-img-maps">
        <img src={fondoMaps}></img>
      </div>
      <div className="container-text-about form">
        <h3>Contacto </h3>
      <form>
        <div>
          <input 
            type="text" 
            placeholder="Nombre" 
            required 
          />
        </div>
        <div>
          <input 
          type="text" 
          placeholder="Apellido" 
          required 
          />
        </div>
        <div>
          <input 
          type="text" 
          placeholder="Correo Electronico" 
          required 
          />
        </div>
        <div>
          <input 
          type="text" 
          placeholder="Celular" 
          required 
          />
        </div>
        <div>
          <textarea 
          type="text" 
          placeholder="Consulta" 
          required 
          />
        </div>
        <button className="button-contacto">
          Enviar consulta</button>
      </form>      
      </div>
    </div>
  )
}

export default ArticleMaps;