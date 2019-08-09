import React, { Component } from 'react';
import { Form, TextInput, NumberInput, Button } from "carbon-components-react";
import { connect } from 'react-redux';
import { getGame, updateGame } from "../actions/gameActions";
import '../styles/game.scss';

class UpdateGamePage extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUpdateGameState = this.handleUpdateGameState.bind(this);

        this.state = this.props.game;
    }

    componentDidMount() {
        const game = this.props.fetchGame(this.props.match.params.id);
        this.setState({ game });
    }

    handleUpdateGameState(event){
        const fld = event.target.name;
        const game = this.props.game;
        game[fld] = event.target.value;
        return this.setState({ game });
    }

    handleSubmit(event){
        event.preventDefault();
        this.props.updateGame(this.state.game._id, this.state.game);
        this.props.history.push('/games')
    }

    render() {
        const { game } = this.props;
        if(game === undefined) return(<div>Loading...</div>);

        return (
            <>
            <h3 className="gameHeading">Add Game</h3>
            <div className="game bx--form-item">
                <Form>
                    <TextInput id="name" name="name" labelText="Title" value={game.name} onChange={this.handleUpdateGameState} />
                    <TextInput id="thumbURL" name="thumbURL" labelText='Thumbnail Image URL:' value={game.thumbURL} onChange={this.handleUpdateGameState} />
                    <TextInput id="imageURL" name="imageURL" labelText='Large Image URL:' value={game.imageURL} onChange={this.handleUpdateGameState} />
                    <NumberInput id="msrp" name="msrp" label='Cost:' value={game.msrp} onChange={this.handleUpdateGameState} />
                    <TextInput id="publisher" name="publisher" labelText='Publisher:' value={game.publisher} onChange={this.handleUpdateGameState} />
                    <Button onClick={this.handleSubmit}>Add Game</Button>
                </Form>
            </div>
            </>
        );
    }
}

function mapStateToProps(state){
    return {
        game: state.gamesList.game
    }
}

const mapDispatchToProps = dispatch => ({
    fetchGame: gameId => dispatch(getGame(gameId)),
    updateGame: (gameId, game) => dispatch(updateGame(gameId, game))
});

export default connect(mapStateToProps, mapDispatchToProps)(UpdateGamePage);