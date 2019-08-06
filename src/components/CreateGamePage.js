import React, { Component } from 'react';
import { Form, TextInput, NumberInput, Button } from "carbon-components-react";
import { connect } from 'react-redux';
import { createGame } from "../actions/gameActions";
import '../styles/game.scss';

class CreateGamePage extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            name:'',
            thumbURL:'',
            imageURL:'',
            msrp:0,
            publisher:''
        };
    }

    handleSubmit(event){
        event.preventDefault();
        const newGame = this.props.createGame({
            game: this.state
        });
        this.props.history.push('/games')
    }

    render() {
        return (
            <>
            <h3 className="gameHeading">Add Game</h3>
            <div className="game bx--form-item">
                <Form>
                    <TextInput id="name" labelText="Title" value={this.state.name} onChange={(evt) => this.setState({name: evt.target.value})} />
                    <TextInput id="thumbURL" labelText='Thumbnail Image URL:' value={this.state.thumbURL} onChange={(evt) => this.setState({thumbURL: evt.target.value})} />
                    <TextInput id="imageURL" labelText='Large Image URL:' value={this.state.imageURL} onChange={(evt) => this.setState({imageURL: evt.target.value})} />
                    <NumberInput id="msrp" label='Cost:' value={this.state.msrp} onChange={(evt) => this.setState({msrp: parseFloat(evt.target.value)})} />
                    <TextInput id="publisher" labelText='Publisher:' value={this.state.publisher} onChange={(evt) => this.setState({publisher: evt.target.value})} />
                    <Button onClick={this.handleSubmit}>Add Game</Button>
                </Form>
            </div>
            </>
        );
    }
}

function mapStateToProps(state){
    return {
        createGame: state.createGame
    }
}

const mapDispatchToProps = dispatch => ({
    createGame: game => dispatch(createGame(game))
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateGamePage);