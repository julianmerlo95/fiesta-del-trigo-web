import React from 'react'
import Main from './Main.component';
import Header from './Header.component';
import ArticleMaps from './ArticleMaps.component';
import Footer from './Footer.component';
import {DividerComponent} from '../Default/divider.controller';
import ImgSlider from './ImgSlaider/imgSlaider.component';
import ImgSliderBandaOne from './ImgSlaider/imgSlaiderBanda1.component';
import ImgSliderBandaTwo from './ImgSlaider/imgSlaiderBanda2.component';
import AboutUs from './AboutUs.component';
import AboutUsBanda from './AboutUsBanda.component';
import GaleryImg from './GaleryImg/GaleryImg';

function Index(){
  return(
    <div className="container-header">
      <Header/>
      <DividerComponent text="Fiesta Provincial del Trigo"/>
      <Main/>
      <ImgSliderBandaOne/>
      <DividerComponent text="Cronograma de Eventos"/>
      <AboutUsBanda/>
      <ImgSliderBandaTwo/>
      <DividerComponent text="Galeria de Imagenes "/>
      <GaleryImg/>
      <ImgSlider/>
      <AboutUs/>
      <ImgSlider/>
      <DividerComponent text="Contacto y Ubicacion"/>
      <ArticleMaps/>
      <Footer/>
    </div>
  )
}

export default Index;