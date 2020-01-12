import React from 'react'
import VideoMain from './VideoMain.component';
import Header from './Header.component';
import ArticleMaps from './ArticleMaps.component';
import Footer from './Footer.component';
import {DividerComponent} from '../Default/divider.controller';
import ImgSliderQueen from './ImgSlaider/imgSlaiderQueen.component';
import ImgSliderBandaOne from './ImgSlaider/imgSlaiderBandaOne.component';
import ImgSliderBandaTwo from './ImgSlaider/imgSlaiderBandaTwo.component';
import AboutUs from './AboutUs.component';
import AboutUsBanda from './AboutUsBanda.component';
import GaleryImg from './GaleryImg/GaleryImg';

function Index(){
  return(
    <div className="container-header">
      <Header/>
      <DividerComponent text="Fiesta Provincial del Trigo"/>
      <VideoMain/>
      <DividerComponent text="Cronograma de Eventos"/>
      <ImgSliderBandaOne/>
      <AboutUsBanda/>
      <ImgSliderBandaTwo/>
      <DividerComponent text="Galeria de Imagenes "/>
      <GaleryImg/>
      <ImgSliderQueen/>
      <AboutUs/>
      <ImgSliderQueen/>
      <DividerComponent text="Contacto y Ubicacion"/>
      <ArticleMaps/>
      <Footer/>
    </div>
  )
}

export default Index;