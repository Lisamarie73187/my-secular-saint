import React, { Component } from 'react'
import '../styles/navBar.css'


class NavBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <div className="navbar_flex">
                <h5>Home</h5>
                <h5>About Us</h5>
                <h5>Info</h5>
                <h5>Promote a Saint</h5>
                <h5>Hall of Saints</h5>
                <h5>Store</h5>
                <h5>Blog</h5>
            </div>
        )
    }
}


export default NavBar
