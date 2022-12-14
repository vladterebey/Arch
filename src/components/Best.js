import React, { Component } from 'react'

import {
    Container,
    Button,
    Card,
    Row,
    Col
} from 'react-bootstrap';

import levin from '../images/architects/Levin.jpg';

import { useTranslation } from "react-i18next";

export default function Best() {
    const { t, i18n } = useTranslation();

    function ShowDesktop() {
        return (
            <Container>
                <h2 className='titles'>{t("cardsection-title")}</h2>

                <Card className='best__card text-center'>
                    <Row className="d-flex flex-wrap g-0 mb-5 position-relative">

                        <Col>
                            <img src={levin} class="w-100" alt="Леонид Менделевич Левин" />
                        </Col>

                        <Col className="best__card__content col-md-8 p-5 ps-md-5">
                            <h5 className="mt-0">{t("card-name")}</h5>
                            <span>{t("card-years")}</span>
                            <p>{t("card-text")}</p>
                            <a className='best__card__link' href="/Architects/People/">{t("card-link")}</a>
                        </Col>
                    </Row>
                </Card>

            </Container>
        );
    }

    function ShowMobile() {
        return (
            <Container>
                <h2 h2 className='titles'>{t("cardsection-title")}</h2>

                <Card className='best__card text-center'>
                    <div className="d-flex flex-wrap">
                        <div className="best__card__img">
                            <img src={levin} class="w-100" alt="Леонид Менделевич Левин" />
                        </div>
                        <div className="best__card__content p-3">
                            <h5 className="mt-0">{t("card-name")}</h5>
                            <span>{t("card-years")}</span>
                            <p>{t("card-text")}</p>
                            <a className='best__card__link' href="/Architects/People/">{t("card-link")}</a>
                        </div>
                    </div>
                </Card>

            </Container>
        );
    }
    
    let width = window.innerWidth;
    if (width > 1024) {
        return ( ShowDesktop() )
    } else {
        return ( ShowMobile() )
    }

{/*
    window.addEventListener('resize', event => {
        let width = window.innerWidth;
        console.log(width);

        if (flag == 'desktop') {
            if (width < 1024) {
                window.location.reload() 
            }      
        } 
        if (flag == 'mobile') {
            if (width > 1024) {
                window.location.reload() 
            }
        }
    }, false);
    
    let flag = '';
    let width = window.innerWidth;
    if (width > 1024) {
        flag = 'desktop';
        return ( ShowDesktop() )
    } else {
        flag = 'mobile';
        return ( ShowMobile() )
    }*/}

}