import React from 'react';
import img1 from '../../../Img/galeriaImg/img1.jpg';
import img2 from '../../../Img/galeriaImg/img2.jpg';
import img3 from '../../../Img/galeriaImg/img3.jpg';
import img4 from '../../../Img/galeriaImg/img4.jpg';
import img5 from '../../../Img/galeriaImg/img5.jpg';
import img6 from '../../../Img/galeriaImg/img6.jpg';
import img7 from '../../../Img/galeriaImg/img7.jpg';
import img8 from '../../../Img/galeriaImg/img8.jpg';
import img9 from '../../../Img/galeriaImg/img9.jpg';


function GaleryImg(){
  return(
    <div className="container-galery-img">
      <div className="container-img-galery"
        data-aos="fade-right"
        data-aos-offset="100"
        data-aos-easing="ease-in-sine"
        data-aos-delay="250">
        <img src={img1}></img>
        <img src={img2}></img>
        <img src={img3}></img>
        <img src={img3}></img>
        <img src={img5}></img>
        <img src={img6}></img>
        <img src={img7}></img>
        <img src={img2}></img>
        <img src={img1}></img>
      </div> 
    </div>
  )
}

export default GaleryImg;