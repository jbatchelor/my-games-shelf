import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getGame } from "../actions/gameActions";
import '../styles/game.scss';

class GameDetails extends Component {
    componentDidMount() {
        this.props.dispatch(getGame(this.props.match.params.id))
    }

    render() {
        if(this.props.gameDetails === undefined) return <div>Loading...</div>;

        const { name, msrp, publisher, imageURL, thumbURL } = this.props.gameDetails;
        const thumbStyle = {
            backgroundImage: `url('${(thumbURL)?thumbURL:imageURL}')`
        };
        
        return (
            <div className="game">
                <h3>{ name }</h3>
                <span className="gameThumb" style={thumbStyle}>&nbsp;</span>
                <dl className="gameDetail">
                    <dt>Cost: </dt>
                    <dd>{ msrp }</dd>
                    <dt>Publisher: </dt>
                    <dd>{ publisher }</dd>
                </dl>
            </div>        
        );
    }
}

const mapStateToProps = state => ({ gameDetails: state.gamesList.game});

export default connect(mapStateToProps)(GameDetails);