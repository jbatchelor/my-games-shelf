import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";

import Home from './Home';
import Games from './Games';

class PageRoutes extends Component {
    render(){
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/games">Games</Link></li>
                        </ul>
                        <Route path="/" exact component={Home} />
                        <Route path="/games" component={Games} />
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}

export default PageRoutes;