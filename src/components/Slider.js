import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';

import castleMir from '../images/slider/castle-mir.jpg';
import castleNecv from '../images/slider/castle-nesv.jpg';
import church from '../images/slider/church.jpg';


import { useTranslation } from "react-i18next";

export default function Slider() {
    const { t, i18n } = useTranslation();
    return (
        <Carousel>
            <Carousel.Item>
                <div className='bg-image'>
                    <img
                        className='slider__img d-block w-100'
                        src={castleMir}
                        alt='Мирский замок'
                    />
                    <div className='mask slider__mask'>
                        <Carousel.Caption>
                            <h3>{t("1st-slide-title")}</h3>
                            <p className='caption-1'>{t("1st-slide-text-1")}</p>
                            <p className='caption-2'>{t("1st-slide-text-1")}{t("1st-slide-text-2")}</p>
                        </Carousel.Caption>
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className='bg-image'>
                    <img
                        className='slider__img d-block w-100'
                        src={castleNecv}
                        alt='Несвижский замок'
                    />
                    <div className='mask slider__mask'>
                        <Carousel.Caption>
                            <h3>{t("2st-slide-title")}</h3>
                            <p className='caption-1'>{t("2st-slide-text-1")}</p>
                            <p className='caption-2'>{t("2st-slide-text-1")}{t("1st-slide-text-2")}</p>
                        </Carousel.Caption>
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className='bg-image'>
                    <img
                        className='slider__img d-block w-100'
                        src={church}
                        alt='Церковь Святого Духа'
                    />
                    <div className='mask slider__mask'>
                        <Carousel.Caption>
                            <h3>{t("3st-slide-title")}</h3>
                            <p className='caption-1'>{t("2st-slide-text-1")}</p>
                            <p className='caption-2'>{t("2st-slide-text-1")}{t("1st-slide-text-2")}</p>
                        </Carousel.Caption>
                    </div>
                </div>
            </Carousel.Item>
        </Carousel>

    )
}
