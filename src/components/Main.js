import React, { Component } from 'react'
import NavBar from './NavBar.js'
import router from '../router'

import '../styles/main.css'
import Logo from '../assets/MySecularSaint-logo-f-transparent.png'
import logoFooter from '../assets/logo/logoMySecularSaint.png'




class Main extends Component {
  
    render() {
        return (
            <div>
                <div className="home_main">
                    <div><img src={Logo} alt="logo" width="250px"/></div>
                    <NavBar styles="navbar_flex"/>
                    {router}
                    <div><img className="footerLogo" src={logoFooter} alt="footerLogo" width="500px"/></div>
                    <footer><h4>Copyright 2018 Secular Saint</h4><NavBar styles="footerNav"/></footer>
                </div>
            </div>
        )
    }
}

export default Main
