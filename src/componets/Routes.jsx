import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './Navbar';
import Home from './Home';
import Login from './Login';
import Mainpage
 from './Mainpage';
 
const Routes = () => {
    return (
        <div>
            <Router>    
                <Switch>
                    <Route path="/home">
                        <Home/>
                    </Route>

                    <Route path="/login">
                        <Login/>
                    </Route>
                        
                    <Route path="/" exact>
                        <Navbar/>
                        <Mainpage/>
                    </Route>
                    </Switch>
            </Router>
        </div>
    )
}

export default Routes
