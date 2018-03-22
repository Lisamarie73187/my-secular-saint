import React, { Component } from 'react'




class Info extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <div className="about_wrapper">
            <h1 style={padding}>Info</h1>
            <div className="flex">
            
                <div>
                    <div>Picture</div>
                </div>
                <div>
                    <h1>My Secular Saint FAQs & Info</h1>
                    <p className="p2">Greeting card companies have come up with ways to acknowledge everyone in your life for everything from climbing the Himalayas to graduating from Kindergarten – but say you want to pay homage to someone in a personal and unique way? My Secular Saint makes it easy to recognize those people or animals in your life who have had a profound impact on the lives of those around them. Our simple and affordable canonization process allows you to give a heartfelt, fun, unique gift that is sure to be remembered and appreciated for decades to come.</p>
                </div>
            </div>
        </div>
        )
    }
}

const padding = {
    padding: '50px'
}


export default Info
