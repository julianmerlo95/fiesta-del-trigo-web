import React from 'react';
import fondoMaps from '../../Img/fondoMaps.png'

function ArticleMaps(){
  return(
    <div className="container-abouts-us container-maps">
      <div className="container-img-about container-img-maps">
        <img src={fondoMaps}></img>
      </div>
      <div className="container-text-about form">
        <h3>Contacto</h3>
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
          <button className="button-contacto">Enviar consulta</button>
    	  </form>      
      </div>
    </div>
  )
}

export default ArticleMaps;