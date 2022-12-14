import React, { Component } from 'react';

import Slider from '../components/Slider';
import Best from '../components/Best';
import Developers from '../components/Developers';



export default class Home extends Component {
    render() {
        return (
            <>
            <Slider />
            <Best />
            <Developers />
            </>
        )
    }
}