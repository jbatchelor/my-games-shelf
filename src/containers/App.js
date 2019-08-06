import React, { Component } from 'react';
import { Content } from "carbon-components-react/lib/components/UIShell";
import { Route } from "react-router-dom";

import Home from '../components/HomePage';
import Games from '../components/GamesPage';
import GameDetails from '../components/GameDetailsPage';
import CreateGame from "../components/CreateGamePage";
import AppHeader from "../common/header";

class App extends Component {
    render(){
        return (
            <>
                <AppHeader />
                <Content>
                    <Route path="/" exact component={Home} />
                    <Route path="/games" exact component={Games} />
                    <Route path="/game/new" exact component={CreateGame} />
                    <Route path="/games/:id" component={GameDetails} />
                </Content>
            </>
        )
    }
}

export default App;