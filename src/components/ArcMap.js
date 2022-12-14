import React, { Component } from 'react'

import { Container } from 'react-bootstrap'

const maps = [
    "https://yandex.by/map-widget/v1/-/CCUaAMqI2D",
    "https://yandex.by/map-widget/v1/-/CCUaABFj9D"
];
/*
document.addEventListener('DOMContentLoaded', function() {
    let overlay = document.getElementById('#overlay');
    let map = document.getElementById('#map');

    console.log('loaded');

    map.addClass('scrolloff');
    overlay.addEventListener("click", function () {
        map.removeClass('scrolloff'); 
        console.log('remove');
    });
    map.addEventListener('mouseleave', function () {
        map.addClass('scrolloff'); 
        console.log('add');
    });
});
*/
export default class ArcMap extends Component {
    render() {
        return (
            <div id="overlay" style={{ position: 'relative', overflow: 'hidden', margin: '50px 0' }}>
                <iframe className='map' id="map" src={maps[this.props.mapProp]} width="100%" height="400" frameborder="1" allowfullscreen="true" style={{ position: 'relative' }}>
                </iframe>
            </div>
        )
    }
}