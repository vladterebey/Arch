import React, { Component } from 'react'

import {
    Container,
    Button,
    CardDeck,
    Card,
    Row,
    Col
} from 'react-bootstrap';

import logo from '../images/logo.png';
import { useTranslation } from "react-i18next";
export default function People() {
    const { t, i18n } = useTranslation();

    function ShowDesktop() {
        return (
            < Container fluid className='bg-dark text-light' >
                <Container className='d-flex justify-content-center py-4'>
                    <Row className='w-100'>
                        <Col xs={8}>
                            <a href='/Architects/' className='footer__logo d-flex align-items-center'>
                                <img
                                    className='logo__img'
                                    src={logo}
                                    alt='logo'
                                />
                                <h2>{t("logo")}</h2>
                            </a>
                        </Col>
                        <Col>
                            <div className='social__icons d-flex mt-3'>
                                <h5 className='mx-3'>{t("social")}</h5>
                                <a className='social__link' href='' target='_blank'><i class="social__icon fab fa-telegram-plane"></i></a>
                                <a className='social__link' href='' target='_blank'><i class="social__icon fab fa-instagram"></i></a>
                                <a className='social__link' href='' target='_blank'><i class="social__icon fab fa-youtube"></i></a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Container >
        );
    }

    function ShowMobile() {
        return (
            <Container fluid className='bg-dark text-light'>
                <Container className='d-flex justify-content-center py-4'>
                    <div className='w-100'>
                        <div className='footer__logo__container'>
                            <a href='/Architects/' className='footer__logo d-flex align-items-center'>
                                <img
                                    className='logo__img'
                                    src={logo}
                                    alt='logo'
                                />
                                <h2>{t("logo")}</h2>
                            </a>
                        </div>
                        <div>
                            <div className='social__icons d-flex mt-3'>
                                <h5 className='mx-3'>{t("social")}</h5>
                                <a className='social__link' href='https://web.telegram.org/#/login' target='_blank'><i class="social__icon fab fa-telegram-plane"></i></a>
                                <a className='social__link' href='https://www.instagram.com/?hl=ru' target='_blank'><i class="social__icon fab fa-instagram"></i></a>
                                <a className='social__link' href='https://www.youtube.com/' target='_blank'><i class="social__icon fab fa-youtube"></i></a>
                            </div>
                        </div>
                    </div>
                </Container>
            </Container >
        );
    }


    let width = window.innerWidth;
    if (width > 1024) {
        return ( ShowDesktop() )
    } else {
        return ( ShowMobile() )
    }
}