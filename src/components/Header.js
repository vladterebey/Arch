import React, { Component } from 'react'
import {
    Navbar,
    Nav,
    NavLink,
    FormControl,
    Container,
    Form,
    Button
} from 'react-bootstrap';
import logo from '../images/logo.png';




import i18n from 'i18next';
import { useTranslation } from "react-i18next";

const changeLang = (ln) => {
    return () => {
        i18n.changeLanguage(ln);
        console.log(ln)
    }
}

export default function Header() {
    const { t, i18n } = useTranslation();
    return (
        <>
            <Navbar collapseOnSelect sticky="top" expand='lg' bg='dark' variant='dark'>
                <Container>
                    <Navbar.Brand href='/Architects/' className='logo__link d-flex align-items-center'>
                        <img className='logo__img' src={logo} alt='logo' />
                        <h2 className='logo__text'><span className='logo__text__span'>{t("logo")}</span></h2>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                    <Navbar.Collapse className='navbar' id='responsive-navbar-nav'>
                        <Nav>
                            <NavLink className='nav__button' href='/Architects/'>{t("home-page")}</NavLink>
                            <NavLink className='nav__button' href='/Architects/people'>{t("people-page")}</NavLink>
                        </Nav>
                        <div className='d-flex btn-group'>
                            <Button onClick={changeLang("ru")} className='text-color-light active' variant='warning'>{t("lang-ru")}</Button>
                            <Button onClick={changeLang("en")} className='' variant='warning'>{t("lang-en")}</Button>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )

}