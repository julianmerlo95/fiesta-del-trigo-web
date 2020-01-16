import React from 'react';
import fondoLbc from '../../../Img/fondoLbc.jpg';

function ImgSliderBandaOne(){
  return(
    <div className="container-img-slider-doble">
      <div className="container-img-slider-one">
      </div>
      {/*the init is display none, when is smartphone is display inline*/}
      <div className="display-none-smartphone-display-inline"
           data-aos="fade-right"
           data-aos-offset="100"
           data-aos-easing="ease-in-sine"
           data-aos-delay="250">
        <img src={fondoLbc}></img>
      </div>
      <h3 className="title-banda">La Banda de Carlitos</h3>
    </div>
  )
}

export default ImgSliderBandaOne;