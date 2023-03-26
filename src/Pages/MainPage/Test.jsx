import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Pagination } from "swiper";
import './test.scss';

function Test() {
    return (
        <div className='wrap'>
            <Swiper
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                direction='vertical' // вертикальная прокрутка
                slidesPerView={1} // показывать по 1 изображению
                spaceBetween={32} // расстояние между слайдами
                mousewheel={true} // можно прокручивать изображения колёсиком мыши
                grabCursor={true} // менять иконку курсора
                modules={[Mousewheel, Pagination]}
                speed={1100}
            >
                <SwiperSlide>
                    <section className='container'>
                        <h1>Section one</h1>
                    </section>
                </SwiperSlide>
                <SwiperSlide>
                    <section className='container'>
                            <h1>Section two</h1>
                    </section>
                </SwiperSlide>
                <SwiperSlide>
                    <section className='container'>
                        <h1>Section three</h1>
                    </section>
                </SwiperSlide>
                <SwiperSlide>
                    <section className='container'>
                        <h1>Section four</h1>
                    </section>
                </SwiperSlide>
            </Swiper>
            {/* <section class="slider">
                <div class="container">
                    <div class="slider__flex">
                        <div class="slider__images">
                            <div class="swiper-container">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide">
                                    <div class="slider__image"><img src="https://picsum.photos/1920/1080" alt=""/></div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="slider__image"><img src="https://picsum.photos/1920/1081" alt=""/></div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="slider__image"><img src="https://picsum.photos/1920/1082" alt=""/></div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="slider__image"><img src="https://picsum.photos/1920/1083" alt=""/></div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="slider__image"><img src="https://picsum.photos/1920/1084" alt=""/></div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
        </div>
    )
}

export default Test