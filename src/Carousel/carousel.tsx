import React, { ReactNode } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import './carousel.css';
import { BREAKPOINTS } from '../config'
//@ts-ignore
import { Arrow } from 'vcc-ui';
import SwiperCore, {
  Pagination,
  Navigation
} from 'swiper';

SwiperCore.use([Pagination, Navigation]);

interface CarouselProps {
  arrowNavigation?: boolean;
  children?: ReactNode;
}

function Carousel({ children, arrowNavigation = true }: CarouselProps) {
  return (
    <Swiper 

    slidesPerView={1.2}
    spaceBetween={20}
    pagination={{"clickable": true}}
    breakpoints={{
      [BREAKPOINTS.small]: {
        slidesPerView: 3,
      },
      [BREAKPOINTS.tablet]: {
        slidesPerView: 4,
        pagination: false
      }
    }}    
    navigation={{
      nextEl: '.next',
      prevEl: '.prev'
    }} 
    className="swiper"

    >
      {/* @ts-ignore */}
      {children.map((child, index) => {
        return <SwiperSlide key={index} {...child.props}></SwiperSlide>
      })}
        
      {window.innerWidth > BREAKPOINTS.tablet && <div className="carousel-footer" slot="container-end">
        {arrowNavigation && <ArrowNavigation />}
      </div>}

    </Swiper>
  )
}

function ArrowNavigation() {
  return (
    <div className="arrow-navigation">
      <button className="arrow-button prev"><Arrow direction="left" color="black" size={15}/></button>
      <button className="arrow-button next"><Arrow direction="right" color="black" size={15}/></button>
    </div>
  )
}

export default Carousel;
