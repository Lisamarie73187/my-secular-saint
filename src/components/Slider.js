import React, { Component } from 'react'
import Carousel from 'nuka-carousel'

import slideOne from '../assets/slider/sliderPictureOne.png'
import slideTwo from '../assets/slider/sliderPictureTwo.png'
import slideThree from '../assets/slider/sliderPictureThree.png'


class Slider extends Component {
 

    render() {
        return (
            <div>
                <Carousel>
                    <img src={slideThree} alt="Slider Three" title="Slider Three"/>
                    <img src={slideOne} alt="certificate of Saint Hood" title="Saint Hood Certificate"/>
                    <img src={slideTwo} alt="Slider Two" title="Slider Two"/>
                </Carousel>
            </div>
        )
    }
}



export default Slider
