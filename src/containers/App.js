import React, { Component } from 'react';
import { Content } from "carbon-components-react/lib/components/UIShell";
import { Route } from "react-router-dom";

import Home from '../components/HomePage';
import Games from '../components/GamesPage';
import GameDetails from '../components/GameDetailsPage';
import CreateGame from "../components/CreateGamePage";
import UpdateGame from "../components/UpdateGamePage";
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
                    <Route path="/games/:id" exact component={GameDetails} />
                    <Route path="/game/:id/edit" component={UpdateGame} />
                </Content>
            </>
        )
    }
}

export default App;