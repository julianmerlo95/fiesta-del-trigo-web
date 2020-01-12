import React from 'react';
import fondoMonada from '../../../Img/fondoLaMonada.jpg';

function ImgSliderBandaTwo(){
  return(
    <div className="container-img-slider-doble">
      <div className="container-img-slider-two">
      </div>
      {/*the init is display none, when is smartphone is display inline*/}
      <div className="display-none-smartphone-display-inline">
        <img src={fondoMonada}></img>
      </div>
      <h3 className="title-banda">La Monada</h3>
    </div>
  )
}

export default ImgSliderBandaTwo;