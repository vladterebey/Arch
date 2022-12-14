import React, { Component } from 'react'

import { Tab, Container, Row, Col, Nav, Form, FormControl, Button, Card, Navbar } from 'react-bootstrap'

import levin from '../images/architects/Levin.jpg';
import ananich from '../images/architects/Ananich.jpg';
import dushevskiy from '../images/architects/Dushewsky.jpg';
import langbard from '../images/architects/Langbard.jpg';
import shabunevskij from '../images/architects/Shabunevskij.jpg';

import { useTranslation } from "react-i18next";

const cards = [
    [
        "1st-arcCard-name",
        "1st-arcCard-years",
        "1st-arcCard-text",
        levin
    ],
    [
        "2st-arcCard-name",
        "2st-arcCard-years",
        "2st-arcCard-text",
        ananich
    ],
    [
        "3st-arcCard-name",
        "3st-arcCard-years",
        "3st-arcCard-text",
        dushevskiy
    ],
    [
        "4st-arcCard-name",
        "4st-arcCard-years",
        "4st-arcCard-text",
        langbard
    ],
    [
        "5st-arcCard-name",
        "5st-arcCard-years",
        "5st-arcCard-text",
        shabunevskij
    ]



]

export default function ArcCard(props) {
    const { t, i18n } = useTranslation();
    return (
        <>
            <Card className='tabs__card tabs__card-active text-center'>
                <Row className='tabs__card__container'>
                    <Col>
                        <img src={cards[props.cardProp][3]} class="tabs__card__photo" alt="Леонид Менделевич Левин" />
                    </Col>
                    <Col className="tabs__card__content col-md-8 p-5 ps-md-5">
                        <Card.Title className="mt-0 mb-1">{t(cards[props.cardProp][0])} </Card.Title>
                        <Card.Text className='mb-2'> {t(cards[props.cardProp][1])} </Card.Text>
                        <Card.Text> {t(cards[props.cardProp][2])} </Card.Text>
                    </Col>
                </Row>
            </Card>
        </>
    )
}
