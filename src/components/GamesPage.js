import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchGames } from "../actions/gameActions";
import "../styles/game.scss";

class GamesPage extends Component {
    componentDidMount() {
        this.props.dispatch(fetchGames());
    }

    renderTableRow(game){
        return(
            <tr key={game._id}>
                <td><img src={(game.thumbURL)?game.thumbURL:game.imageURL} width="50" /></td>
                <td><Link to={`/games/${game._id}`}>{game.name}</Link></td>
                <td>{game.publisher}</td>
                <td>Edit | Delete</td>
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

export default connect(mapStateToProps)(GamesPage);