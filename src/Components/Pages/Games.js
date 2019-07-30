import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getGames } from '../../Games/Games-Actions';

class Games extends Component {
    componentDidMount() {
        this.props.dispatch(getGames())
    }

    render(){
        return (
            <div>
                <h3>Games</h3>
                <ul>
                    {
                        this.props.gamesList.map((game) => 
                            <li key={game._id}>{game.name}</li>
                        )
                    }
                </ul>
            </div>
        );
    }
};

const mapStateToProps = (state) => ({
    gamesList: state.games
});

export default connect(mapStateToProps)(Games);