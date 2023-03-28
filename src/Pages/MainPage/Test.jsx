import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Pagination } from "swiper";
import './test.scss';
import { useRef } from 'react';

function Test() {
    const swiperRef = useRef(null)
    return (
        <div className='wrap'>
            <ul className='wrap__list'>
                <li className='wrap__item' onClick={() => swiperRef.current.swiper.slideToLoop(1, 1000)}>1</li>
                <li className='wrap__item' onClick={() => swiperRef.current.swiper.slideToLoop(2, 1000)}>2</li>
                <li className='wrap__item' onClick={() => swiperRef.current.swiper.slideToLoop(3, 1000)}>3</li>
                <li className='wrap__item' onClick={() => swiperRef.current.swiper.slideToLoop(4, 1000)}>4</li>
            </ul>
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
                ref={swiperRef}
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
        </div>
    )
}

export default Test