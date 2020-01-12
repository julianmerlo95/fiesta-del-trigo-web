import React from 'react'
import { DividerComponent } from '../Default/divider.controller';
import Header from './Header/Header.component';
import VideoMain from './Video/VideoMain.component';
import ImgSliderBandaOne from './ImgSlaider/imgSlaiderBandaOne.component';
import AboutUsBanda from './AboutUs/AboutUsBanda.component';
import ImgSliderBandaTwo from './ImgSlaider/imgSlaiderBandaTwo.component';
import GaleryImg from './GaleryImg/GaleryImg';
import ImgSliderQueen from './ImgSlaider/imgSlaiderQueen.component';
import AboutUs from './AboutUs/AboutUs.component';
import ArticleMaps from './ArticleMaps/ArticleMaps.component';
import Footer from './Footer/Footer.component';

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
      <DividerComponent text="Ubicacion y Contacto"/>
      <ArticleMaps/>
      <Footer/>
    </div>
  )
}

export default Index;