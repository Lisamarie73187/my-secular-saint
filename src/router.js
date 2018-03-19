import React from 'react'
import {Switch, Route} from 'react-router-dom'

import Main from './components/Main'
import AboutUs from './components/Pages/AboutUs'
import Info from './components/Pages/Info'
import PromoteASaint from './components/Pages/PromoteASaint'
import HallOfSaints from './components/Pages/HallOfSaints'
import Store from './components/Pages/Store'
import Blog from './components/Pages/Blog'




export default (
    <Switch>
        <Route exact path="/" component={ Main }/>
        <Route path="/aboutus" component={ AboutUs }/>
        <Route path="/info" component={ Info }/>
        <Route path="/PromoteASaint" component={ PromoteASaint }/>
        <Route path="/HallOfSaints" component={ HallOfSaints }/>
        <Route path="/Store" component={ Store }/>
        <Route path="/Blog" component={ Blog}/>
    </Switch>
)