import React from 'react';
import fondoLbc from '../../../Img/fondoLbc.jpg';

function ImgSliderBandaOne(){
  return(
    <div className="container-img-slider-doble">
      <div className="container-img-slider-one">
      </div>
      {/*the init is display none, when is smartphone is display inline*/}
      <div className="display-none-smartphone-display-inline">
        <img src={fondoLbc}></img>
      </div>
      <h3 className="title-banda">La Banda de Carlitos</h3>
    </div>
  )
}

export default ImgSliderBandaOne;