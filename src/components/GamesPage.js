import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchGames, deleteGame } from "../actions/gameActions";
import "../styles/game.scss";

class GamesPage extends Component {
    constructor(props) {
        super(props);
        this.handleDeleteGame = this.handleDeleteGame.bind(this);
    }

    componentDidMount() {
        this.props.fetchGames();
    }

    handleDeleteGame(evt){
        evt.preventDefault();
        const btnDelete = evt.target;
        const gameid = (btnDelete && btnDelete.dataset.gameid) ? btnDelete.dataset.gameid : "";
        if(gameid.length > 0)  this.props.removeGame(gameid);
    }

    renderTableRow(game){
        return(
            <tr key={game._id}>
                <td><img src={(game.thumbURL)?game.thumbURL:game.imageURL} width="50" /></td>
                <td><Link to={`/games/${game._id}`}>{game.name}</Link></td>
                <td>{game.publisher}</td>
                <td><Link to={`/game/${game._id}/edit`}>Edit</Link> | <a href="#" onClick={this.handleDeleteGame} data-gameid={game._id}>Delete</a></td>
            </tr>
        )
    }

    render(){
        if(this.props.gamesList === undefined){
            return "We ain't found *%&$%.";
        }

        return (
            <>
                <h3 className="gameHeading">Games</h3>
                <table className="gameGrid">
                    <tbody>
                        {
                            this.props.gamesList.map((game) => this.renderTableRow(game))
                        }
                    </tbody>            
                </table>
                <Link to="/game/new" className="bx--btn bx--btn--primary">New Game</Link>
            </>
        );
    }
};

const mapStateToProps = state => ({
    gamesList: state.gamesList.games
});

const mapDispatchToProps = dispatch => ({
    fetchGames: () => dispatch(fetchGames()),
    removeGame: game => dispatch(deleteGame(game))
});

export default connect(mapStateToProps, mapDispatchToProps)(GamesPage);