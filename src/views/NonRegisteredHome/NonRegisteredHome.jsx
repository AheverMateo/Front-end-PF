import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Dot } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import logo from '../../assets/NONFLIX-LOGO.png';
import megalodon from '../../assets/megalodon2.jpg';
import style  from './NonRegisteredHome.module.css'
const NonRegisteredHome = () =>  {
    return (
        <div className={style.main}>
        <div className={style.header}>
        <div className={style.logo}>
            <img src={logo} alt="NonFlix" />
        </div>
        <div className={style.options}>
            <ul>
                <a href=''><li>Register Now</li></a>
                <a href=''><li>Log In</li></a>
            </ul>
            </div>
        </div>
        
        <CarouselProvider
        naturalSlideWidth={70}
        naturalSlideHeight={20}
        totalSlides={3}
      >
        <Slider className={style.homeSlider} isPlaying={true} interval={5000}>
          <Slide index={0}>
            <img className={style.img} src="https://images.thedirect.com/media/article_full/mario-movie-poster.jpg" alt="Super Mario"/>
          </Slide>
          
          <Slide index={1}>
            <img className={style.img} src={megalodon} alt ="Megalodon"/>
          </Slide>
          <Slide className={style.img} index={2}><img src='https://movies.sterkinekor.co.za/CDN/media/entity/get/FilmTitleGraphic/HO00002694?referenceScheme=HeadOffice&allowPlaceHolder=true' alt=''/></Slide>
        </Slider>
        <ButtonBack>Back</ButtonBack>
        <ButtonNext>Next</ButtonNext>
      </CarouselProvider>
      </div>
    )
}

export default NonRegisteredHome;