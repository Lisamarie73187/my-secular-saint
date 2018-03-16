import React, { Component } from 'react'
import NavBar from './NavBar.js'
import Slider from './Slider'

import '../styles/main.css'
import Logo from '../assets/MySecularSaint-logo-f-transparent.png'
import saintOne from '../assets/saints/saintsHomePage.jpg'
import saintTwo from '../assets/saints/saintsHomePage2.jpg'



class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <div>
                <div className="home_main">
                    <div><img src={Logo} alt="logo" width="250px"/></div>
                    <NavBar/>
                    <div><h1>Give the Unique Gift of SaintHood</h1></div>
                    <Slider/>
                    <p>My Secular Saint sweeps the antiquated concept of sainthood off its pedestal and makes it possible for you to give the unique gift of sainthood to a special friend, family member, coworker, or pet. We believe in celebrating the little miracles in life, and those “modern saints” who bring so much joy and happiness to our lives. The Hall of Saints is full of exceptional people and pets, and we can’t wait to recognize your special someone as a modern saint alongside them. </p>

                    <p>You won’t find many gifts more unique than the gift of sainthood, and no one makes it easier to promote a saint than My Secular Saint. Fill out our short online application to get started and give the gift of sainthood today!</p>
                    <div><h2>CHECK OUT OUR FEATURED SAINTS</h2></div>
                    <div className="home_pictures">
                        <img src={saintOne} alt="saint" width="400px"/>
                        <img src={saintTwo} alt="saint" width="400px"/>
                    </div>
                </div>
            </div>
        )
    }
}


export default Main
