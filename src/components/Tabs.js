import React, { Component } from 'react'

import { Tab, Container, Row, Col, Nav, Form, FormControl, Button, Card, Navbar, NavItem, NavLink } from 'react-bootstrap'
import ReactPlayer from 'react-player'

import ArcCard from '../components/ArcCard';
import ArcTimeline from '../components/ArcTimeline';
import ArcGallery from '../components/ArcGallery';
import ArcMap from '../components/ArcMap';

import { useTranslation } from "react-i18next";

const players = [
    'https://youtu.be/217xXZC-ruc',
    'https://youtu.be/kasucTWw3SU',
    'https://youtu.be/uPJayH5FjXk',
    'https://youtu.be/oHP3qMRwVzU',
    'https://youtu.be/a43rFmrY78c'
]

const architects = [
    "1st-arcCard-name",
    "2st-arcCard-name",
    "3st-arcCard-name",
    "4st-arcCard-name",
    "5st-arcCard-name"
]

/*const tabItem = arhitects.map( name => <NavItem><NavLink eventkey='first'>{t(architects[0])} </NavLink></NavItem>)*/

export default function Tabs(props) {
    const { t, i18n } = useTranslation();
    return (

        <Tab.Container id='left-tabs-example' defaultActiveKey='first'>
            <Row className='tabs__container'>
                <Col className='mt-3' sm={3}>
                    <Card className='bg-dark'>
                        <Form className='d-flex'>
                            <FormControl
                                type='text'
                                placeholder={t("search")}
                                className='search__input'
                            /*     onChange{(eventKey) => console.log(event)}*/
                            />
                            <Button className='search__btn' variant='warning'>{t('search')}</Button>
                        </Form>
                        <Nav variant='pills' className='flex-column mt-2 mx-1'>
                            <NavItem>
                                <NavLink eventKey='first'>{t(architects[0])}</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink eventKey='second'>{t(architects[1])}</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink eventKey='third'>{t(architects[2])}</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink eventKey='fourth'>{t(architects[3])}</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink eventKey='five'>{t(architects[4])}</NavLink>
                            </NavItem>
                        </Nav>
                    </Card>

                </Col>

                <Col sm={9}>
                    <Tab.Content className='mt-3'>
                        <Tab.Pane eventKey='first'>
                            <>
                                <ArcCard cardProp='0' />
                                <ArcTimeline timelineProp='0' />
                                <ArcGallery galleryProp='0' />

                                <ReactPlayer
                                    url={players[0]}
                                    className='player'
                                    width='100%'
                                    height='80vh'
                                ></ReactPlayer>

                                <ArcMap mapProp='0' />
                            </>
                        </Tab.Pane>

                        <Tab.Pane eventKey='second'>
                            <>
                                <ArcCard cardProp='1' />
                                <ArcTimeline timelineProp='1' />
                                <ArcGallery galleryProp='1' />

                                <ReactPlayer
                                    url={players[1]}
                                    className='player'
                                    width='100%'
                                    height='80vh'
                                ></ReactPlayer>

                                <ArcMap mapProp='1' />
                            </>
                        </Tab.Pane>

                        <Tab.Pane eventKey='third'>
                            <>
                                <ArcCard cardProp='2' />
                                <ArcTimeline timelineProp='2' />
                                <ArcGallery galleryProp='2' />

                                <ReactPlayer
                                    url={players[2]}
                                    className='player'
                                    width='100%'
                                    height='80vh'
                                ></ReactPlayer>

                                <ArcMap mapProp='1' />
                            </>
                        </Tab.Pane>

                        <Tab.Pane eventKey='fourth'>
                            <>
                                <ArcCard cardProp='3' />
                                <ArcTimeline timelineProp='3' />
                                <ArcGallery galleryProp='3' />

                                <ReactPlayer
                                    url={players[3]}
                                    className='player'
                                    width='100%'
                                    height='80vh'
                                ></ReactPlayer>

                                <ArcMap mapProp='1' />
                            </>
                        </Tab.Pane>

                        <Tab.Pane eventKey='five'>
                            <>
                                <ArcCard cardProp='4' />
                                <ArcTimeline timelineProp='4' />
                                <ArcGallery galleryProp='4' />

                                <ReactPlayer
                                    url={players[4]}
                                    className='player'
                                    width='100%'
                                    height='80vh'
                                ></ReactPlayer>

                                <ArcMap mapProp='1' />
                            </>
                        </Tab.Pane>
                    </Tab.Content>
                </Col>
            </Row>
        </Tab.Container>

    )
}
