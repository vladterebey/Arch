import React, { Component } from 'react'

import {
    Container,
    Button,
    CardDeck,
    Card
} from 'react-bootstrap';

import logo from '../images/logo.png';

import Vlad from '../images/footer/Vlad.jpg';
import Ilya from '../images/footer/Ilya.jpg';
import Aleksei from '../images/footer/Aleksei.jpg'

import { useTranslation } from "react-i18next";

export default function Developers() {
    const { t, i18n } = useTranslation();
    return (
        <Container>
            <h2 className='titles'>{t("team-title")}</h2>
            <CardDeck className='d-flex justify-content-center mb-5'>
                <Card className='developers__card' bg='dark'>
                    <Card.Img
                        className='developers__photo'
                        src={Vlad}
                        alt="Vlad"
                    />
                    <Card.Body>
                        <a className='developers__link' href='https://github.com/vladterebey' title='Открыть профиль в Github' target='blank'>
                            <Card.Title>Vlad</Card.Title>
                            <Card.Text>{t("team-Vlad")}</Card.Text>
                            <i class="developers__icon fab fa-github"></i>
                        </a>
                    </Card.Body>
                </Card>
                <Card className='developers__card' bg='dark'>
                    <Card.Img
                        className='developers__photo'
                        src={Ilya}
                        alt="Ilya"
                    />
                    <Card.Body>
                        <a className='developers__link' href='https://github.com/IliaGolovchuk' title='Открыть профиль в Github' target='blank'>
                            <Card.Title>Ilya</Card.Title>
                            <Card.Text>{t("team-Ilya")}</Card.Text>
                            <i class="developers__icon developers__icon--light fab fa-github"></i>
                        </a>
                    </Card.Body>
                </Card>
                <Card className='developers__card' bg='dark'>
                    <Card.Img
                        className='developers__photo'
                        src={Aleksei}
                        alt="Lexa"
                    />
                    <Card.Body>
                        <a className='developers__link' href='https://github.com/Alexei2003' title='Открыть профиль в Github' target='blank'>
                            <Card.Title>Alex</Card.Title>
                            <Card.Text>{t("team-Aleksei")}</Card.Text>
                            <i class="developers__icon developers__icon--light fab fa-github"></i>
                        </a>
                    </Card.Body>
                </Card>
            </CardDeck>
        </Container>
    )
}


