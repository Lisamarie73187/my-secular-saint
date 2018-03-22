import React, { Component } from 'react'

import Ted from '../../assets/ted-photo1.jpg'


class AboutUs extends Component {
   
    componentDidMount(){
        window.scrollTo(0,0)
    }

    render() {
        return (
            <div className="about_wrapper">
                <h1 style={padding}>About Us</h1>
                <div className="flex">
                    <div>
                        <img src={Ted} alt="Ted Herzberg" style={{padding: '20px'}}/>
                    </div>
                    <div>
                        <h1>About Ted Herzberg & My Secular Saint</h1>
                        <p className="p2">My Secular Saint was founded by Ted Herzberg, whose experience as a Catholic Priest and practicing Franciscan provided a deep understanding of the canonization process and inspired the idea that modern saints should be celebrated like those saints of yore. As Herzberg puts it, “The Catholic Church has a corner on who’s a saint and who isn’t. What better business could I start than to open up the world to sainthood?”</p>
                        <h5 style={{color: '#2A9ED8'}}>My Secular Saint: A Celebration of Life</h5>
                        <p className="p2">As a student, Herzberg saw firsthand how the bureaucracy of the Catholic Church delays sainthood to those among us whose lives most deserve to be celebrated and remembered. Herzberg’s professor of Sacred Dogma was working on the cause for canonization of Padre Junipero Serra, a Franciscan friar who founded the first nine Spanish missions in California between San Diego and San Francisco.</p>
                        <p className="p2">“It’s 63 years later and Serra still isn’t a saint,” Herzberg said, “I figured make sainthood more immediate. Don’t limit a halo to the dead only.”</p>
                        <p className="p2">Although Padre Serra was finally canonized by Pope Francis during his visit to the United States, it came more than 200 years after his death. My Secular Saint aims to promote modern saints much faster than that, and to celebrate those living as well as those deceased.</p>
                        <h5 style={{color: '#2A9ED8'}}>We Recognize and Appreciate the Everyday Miracles</h5>
                        <p className="p2">Herzberg’s endeavor to start My Secular Saint also grew out of his appreciation for the “everyday” miracle, those moments in life that give us pause and make us appreciate life and the people we share it with. The birth of a child is as miraculous to Herzberg as is the friend who knows just what to say to cheer you up or the coworker who goes above and beyond the call to lighten your load</p>
                        <h5 style={{color: '#2A9ED8'}}>Sainthood: Not Just for People Anymore</h5>
                        <p className="p2">The unique gift of sainthood isn’t limited to people, either. My Secular Saint allows you to commemorate your furry or feathered friends as modern saints as easily as you might celebrate the lives or accomplishments of those people who are nearest and dearest to your heart. Herzberg explains how My Secular Saint broadened in its concept of canonization to include pets. “Later on when we got the business partners together, we included animals. Hagiographers extol Francis of Assisi and how birds rested on his shoulder and accompanied him and how he befriended the ferocious wolf of Gubbio. How is it that Francis is the saint? What about the animals?”</p>
                        <h5 style={{color: '#2A9ED8'}}>A Fast, Easy, and Affordable Gift from the Heart</h5>
                        <p className="p2">Promoting a saint through My Secular Saint is as easy as filling out a short form and paying a nominal canonization fee online. Giving the unique and heartfelt gift of sainthood to a friend, family member, coworker, or pet is unlike anything else you can buy in stores or online. Promoting a saint is also lots of fun, which is another reason Herzberg decided to celebrate modern saints by making canonization available to the world: “I thought it would be fun. There might have been a pinch of mischief in my madness.”</p>

                        <p className="p2">Promoting a saint only takes a few minutes, but it’s a gift that will be remembered for a lifetime. Filling out the initial application is free, so why not take the first step today? Contact us online if you have any questions, and be sure to look through our Hall of Saints to decide where you would like your saint to be commemorated and to see examples of other exemplary people and pets who have been canonized through My Secular Saint.</p>
                    </div>
                </div>
            </div>
        )
    }
}

const padding = {
    padding: '50px'
}

export default AboutUs
