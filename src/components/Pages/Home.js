import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Slider from '../Slider'

import '../../styles/main.css'
import saintOne from '../../assets/saints/saintsHomePage.jpg'
import saintTwo from '../../assets/saints/saintsHomePage2.jpg'
import promoteASaint from '../../assets/saints/promoteasaint.png'



class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <div>
                 <div><h1>Give the Unique Gift of SaintHood</h1></div>
                    <div className="home_slider"><Slider/></div>
                    <p>My Secular Saint sweeps the antiquated concept of sainthood off its pedestal and makes it possible for you to give the unique gift of sainthood to a special friend, family member, coworker, or pet. We believe in celebrating the little miracles in life, and those “modern saints” who bring so much joy and happiness to our lives. The Hall of Saints is full of exceptional people and pets, and we can’t wait to recognize your special someone as a modern saint alongside them. </p>

                    <p>You won’t find many gifts more unique than the gift of sainthood, and no one makes it easier to promote a saint than My Secular Saint. Fill out our short online application to get started and give the gift of sainthood today!</p>
                    <Link className="noDecor" to="/HallOfSaints"><div><h2>CHECK OUT OUR FEATURED SAINTS</h2></div></Link>
                    <div className="home_pictures">
                        <img src={saintOne} alt="saint" width="400px"/>
                        <img src={saintTwo} alt="saint" width="400px"/>
                        <Link to="/PromoteASaint"><div><img src={promoteASaint} alt="saint" width="400px"/></div></Link>
                    </div>
                    <Link className="noDecor" to="/info"><div><h1>Have Questions? <span className="orange"> Get More Info Here!</span></h1></div></Link>
            </div>
        )
    }
}



export default Home
