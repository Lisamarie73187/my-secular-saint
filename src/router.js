import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Main from './components/Main'




export default (
    <Switch>
        <Route exact path="/" component={ Main }/>
        {/* <Route path="/goal/:goalsid" component={ Goal }/>
        <Route path="/goal/:goalsid" component={ Modal }/>
        <Route path="/Create" component={ CreateGoal }/> */}
    </Switch>
)