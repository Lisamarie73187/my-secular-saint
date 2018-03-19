import React, { Component } from 'react'
import '../styles/navBar.css'
import { Link } from 'react-router-dom'


class NavBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <div className={this.props.styles}>
                <h5>Home</h5>
                <Link className="noDecor" to="/aboutus"><h5>About Us</h5></Link>
                <Link className="noDecor" to="/info"><h5>Info</h5></Link>
                <Link className="noDecor" to="/PromoteASaint"><h5>Promote a Saint</h5></Link>
                <Link className="noDecor" to="/HallOfSaints"><h5>Hall of Saints</h5></Link>
                <Link className="noDecor" to="/Store"><h5>Store</h5></Link>
                <Link className="noDecor" to="/Blog"><h5>Blog</h5></Link>
            </div>
        )
    }
}


export default NavBar
