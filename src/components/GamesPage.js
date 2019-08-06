import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchGames } from "../actions/gameActions";

class GamesPage extends Component {
    componentDidMount() {
        this.props.dispatch(fetchGames());
    }

    render(){
        if(this.props.gamesList === undefined){
            return "We ain't found *%&$%.";
        }

        return (
            <div>
                <h3>Games</h3>
                <ul>
                    {
                        this.props.gamesList.map((game) => <li key={game._id}><Link to={`/games/${game._id}`}>{game.name}</Link></li>)
                    }            
                </ul>
            </div>
        );
    }
};

const mapStateToProps = state => ({
    gamesList: state.gamesList.games
});

export default connect(mapStateToProps)(GamesPage);