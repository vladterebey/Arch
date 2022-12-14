import React, { Component } from 'react'
/*
import 'photoswipe/dist/photoswipe.css'
import 'photoswipe/dist/default-skin/default-skin.css'*/

import { Tab, Container, Row, Col, Nav, Form, FormControl, Button, Card, Navbar } from 'react-bootstrap'

import Gallery from 'react-photo-gallery'

const photos = [
    [
        {
            src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Khatyn_Memorial%2C_Belarus.jpg/1280px-Khatyn_Memorial%2C_Belarus.jpg',
            width: 400,
            height: 300,
            title: 'Мемориальный комплекс «Прорыв»'
        },
        {
            src: 'https://upload.wikimedia.org/wikipedia/commons/0/05/%D0%9C%D0%B5%D0%BC%D0%BE%D1%80%D0%B8%D0%B0%D0%BB_%D0%9F%D1%80%D0%BE%D1%80%D1%8B%D0%B2_%D0%9E%D0%B1%D1%89%D0%B8%D0%B9_%D0%BF%D0%BB%D0%B0%D0%BD.jpg',
            width: 400,
            height: 300,
            title: 'Скульптура «Непокорённый человек»'
        },
        {
            src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Khatyn_Panorama.jpg/1920px-Khatyn_Panorama.jpg',
            width: 800,
            height: 200,
            title: 'Вид основной части Мемориального комплекса (от входа)'
        },

        {
            src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Traeckaje_suburb-4.jpg/1280px-Traeckaje_suburb-4.jpg',
            width: 400,
            height: 200,
            title: 'Старинные здания в предместье, некоторые из них имеют фундаменты XVII столетия'
        },
        {
            src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Former_Synagogue.JPG/1280px-Former_Synagogue.JPG',
            width: 400,
            height: 200,
            title: '«Китаевская» синагога (ныне «Дом природы»)'
        },
        {
            src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/NCS_Troetskoe_predmest%27e_panorama.jpg/1650px-NCS_Troetskoe_predmest%27e_panorama.jpg',
            width: 800,
            height: 200,
            title: 'Панорама Троицкого предместья и Высокого рынка'
        }
    ],

    [
        {
            src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Russian_Embassy_2.jpg/1920px-Russian_Embassy_2.jpg",
            width: 400,
            height: 200,
            title: 'Жилой комплекс посольства Российской федерации в Беларуси по улице Орловской в Минске (2007)'
        },
        {
            src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/NBRB.JPG/1280px-NBRB.JPG',
            width: 400,
            height: 200,
            title: 'Реконструкция здания Национального банка Беларуси (2002)'
        },
        {
            src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Belarusbank_511.jpg/1920px-Belarusbank_511.jpg',
            width: 400,
            height: 200,
            title: 'Здание филиала № 511 АСБ «Беларусбанк» на пересечении улицы Козлова, улицы Ботанической и переулка Козлова в Минске (2012)'
        },
        {
            src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/BelSwissBank_Headquarters.jpg/1920px-BelSwissBank_Headquarters.jpg',
            width: 400,
            height: 200,
            title: 'Головной офис БСБ Банк по улице Заславской в Минске (2004)'
        }
    ],

    [
        {
            src: "https://www.lrt.lt/img/2020/09/06/716395-259588-1287x836.jpg",
            width: 300,
            height: 300,
            title: 'Эскиз кинотеатра "Метрополис'
        },
        {
            src: 'https://www.lrt.lt/img/2020/09/06/716389-673333-756x425.jpg',
            width: 300,
            height: 300,
            title: 'Эскиз памятника в г. Йонишкисе, посвященного 10-летию литовской независимости'
        }
    ],

    [
        {
            src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Gouvernementbelarus.JPG/1280px-Gouvernementbelarus.JPG",
            width: 500,
            height: 300,
            title: 'Дом правительства'
        },
        {
            src: 'https://upload.wikimedia.org/wikipedia/ru/a/a6/Theatre_opera%26ballet%2C_Minsk.jpg',
            width: 500,
            height: 300,
            title: 'Большой театр Беларуси'
        },
        {
            src: 'https://upload.wikimedia.org/wikipedia/commons/a/ad/%D0%94%D0%BE%D0%BC_%D0%BE%D1%84%D0%B8%D1%86%D0%B5%D1%80%D0%BE%D0%B2%2C_%D0%9C%D0%B8%D0%BD%D1%81%D0%BA.JPG',
            width: 800,
            height: 300,
            title: 'Центральный дом офицеров'
        }
    ],

    [
        {
            src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/%D0%93%D0%BE%D0%BC%D0%B5%D0%BB%D1%8C._%D0%98%D1%80%D0%B8%D0%BD%D0%B8%D0%BD%D1%81%D0%BA%D0%B0%D1%8F_11._%D0%A4%D0%BE%D1%82%D0%BE_07.JPG/411px-%D0%93%D0%BE%D0%BC%D0%B5%D0%BB%D1%8C._%D0%98%D1%80%D0%B8%D0%BD%D0%B8%D0%BD%D1%81%D0%BA%D0%B0%D1%8F_11._%D0%A4%D0%BE%D1%82%D0%BE_07.JPG",
            width: 400,
            height: 200,
            title: 'Дом врача (дом для гомельского доктора Наума Ильича Александрова по улице Ирининской)'
        },
        {
            src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/%D0%93%D0%BE%D0%BC%D0%B5%D0%BB%D1%8C._%D0%91%D1%83%D0%B4%D1%8B%D0%BD%D0%B0%D0%BA_%D0%BA%D0%B0%D0%BC%D0%B5%D1%80%D1%86%D1%8B%D0%B9%D0%BD%D0%B0%D0%B3%D0%B0_%D0%B1%D0%B0%D0%BD%D0%BA%D0%B0.jpg/411px-%D0%93%D0%BE%D0%BC%D0%B5%D0%BB%D1%8C._%D0%91%D1%83%D0%B4%D1%8B%D0%BD%D0%B0%D0%BA_%D0%BA%D0%B0%D0%BC%D0%B5%D1%80%D1%86%D1%8B%D0%B9%D0%BD%D0%B0%D0%B3%D0%B0_%D0%B1%D0%B0%D0%BD%D0%BA%D0%B0.jpg',
            width: 400,
            height: 200,
            title: 'Здание Виленского коммерческого банка'
        },
        {
            src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Gomel._Lenin_Avenue._House_of_the_Commune.jpeg/411px-Gomel._Lenin_Avenue._House_of_the_Commune.jpeg',
            width: 400,
            height: 200,
            title: 'Дом-коммуна'
        },
        {
            src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/%D0%9F%D0%B0%D0%BB%D0%B0%D1%86%D0%B0%D0%B2%D0%B0-%D0%BF%D0%B0%D1%80%D0%BA%D0%B0%D0%B2%D1%8B_%D0%BA%D0%BE%D0%BC%D0%BF%D0%BB%D0%B5%D0%BA%D1%81_%D1%9E_%D0%93%D0%BE%D0%BC%D0%B5%D0%BB%D1%96._%D0%A4%D0%B0%D1%81%D0%B0%D0%B4_%D0%BF%D0%B0%D0%BB%D0%B0%D1%86%D0%B0.jpg/411px-%D0%9F%D0%B0%D0%BB%D0%B0%D1%86%D0%B0%D0%B2%D0%B0-%D0%BF%D0%B0%D1%80%D0%BA%D0%B0%D0%B2%D1%8B_%D0%BA%D0%BE%D0%BC%D0%BF%D0%BB%D0%B5%D0%BA%D1%81_%D1%9E_%D0%93%D0%BE%D0%BC%D0%B5%D0%BB%D1%96._%D0%A4%D0%B0%D1%81%D0%B0%D0%B4_%D0%BF%D0%B0%D0%BB%D0%B0%D1%86%D0%B0.jpg',
            width: 400,
            height: 200,
            title: 'Дворец Румянцевых-Паскевичей'
        },
        {
            src: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Homiel%2C_Re%C5%BAnickaja-Prabojnaja%2C_Savoj._%D0%93%D0%BE%D0%BC%D0%B5%D0%BB%D1%8C%2C_%D0%A0%D1%8D%D0%B7%D1%8C%D0%BD%D1%96%D1%86%D0%BA%D0%B0%D1%8F-%D0%9F%D1%80%D0%B0%D0%B1%D0%BE%D0%B9%D0%BD%D0%B0%D1%8F%2C_%D0%A1%D0%B0%D0%B2%D0%BE%D0%B9_%281930-39%29.jpg',
            width: 400,
            height: 200,
            title: 'Гостиница «Савой»'
        }

    ]

];

export default class ArcGallery extends Component {
    render() {
        return (
            <>
                <Container className='gallery gallery-active'>
                    <Gallery photos={photos[this.props.galleryProp]} />
                </Container>
            </>
        );
    }
}


{/*
export default class ArcGallery extends Component {
    render() {
        return (

            <Gallery>
                <Row
                    
                    width='100%'
                    height='600px'
                >
                    <Col sm={1}>
                        <Item
                      
                            original={BundesarchivBild}

                            thumbnail={BundesarchivBild}
                            width="1024px"
                            height="768px"
                        >
                            {({ ref, open }) => (
                                <img ref={ref} onClick={open} src={BundesarchivBild} />
                            )}
                        </Item>
                    </Col>
                    <Col sm={1}>
                        <Item
                            original={BundesarchivBild}
                            thumbnail={BundesarchivBild}
                            width="1024px"
                            height="768px"
                        >
                            {({ ref, open }) => (
                                <img ref={ref} onClick={open} src={BundesarchivBild} />
                            )}
                        </Item>
                        <Item
                            original={BundesarchivBild}
                            thumbnail={BundesarchivBild}
                            width="1024px"
                            height="768px"
                        >
                            {({ ref, open }) => (
                                <img ref={ref} onClick={open} src={BundesarchivBild} />
                            )}
                        </Item>
                    </Col>
                    <Col sm={1}>
                    <Item
                            original={BundesarchivBild}
                            thumbnail={BundesarchivBild}
                            width="1024px"
                            height="768px"
                        >
                            {({ ref, open }) => (
                                <img ref={ref} onClick={open} src={BundesarchivBild} />
                            )}
                        </Item>
                        <Item
                            original={BundesarchivBild}
                            thumbnail={BundesarchivBild}
                            width="1024px"
                            height="768px"
                        >
                            {({ ref, open }) => (
                                <img ref={ref} onClick={open} src={BundesarchivBild} />
                            )}
                        </Item>
                    </Col>

                </Row>
            </Gallery>

        )
    }
}

*/}