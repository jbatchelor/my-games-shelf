import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, TextInput, NumberInput, Button } from "carbon-components-react";
import { createGame } from "../actions/gameActions";
import '../styles/game.scss';

class CreateGamePage extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = event => {
        event.preventDefault();
        const theForm = document.querySelector('.game > form');

        let data = {};
        theForm.querySelectorAll('input').each((inp) => {
            console.log(inp);
        });
        
        //const data = new FormData(event.target);
        console.log(data);
    }

    render() {
        return (
            <>
            <h3 className="gameHeading">Add Game</h3>
            <div className="game bx--form-item">
                <Form onSubmit={this.handleSubmit}>
                    <TextInput id="name" {...{ labelText: 'Title'}}/>
                    <TextInput id="thumbURL" {...{ labelText: 'Thumbnail Image URL:'}} />
                    <TextInput id="imageURL" {...{ labelText: 'Large Image URL:'}} />
                    <NumberInput id="msrp" {...{ labelText: 'Cost:'}} />
                    <TextInput id="publisher" {...{ labelText: 'Publisher:'}} />
                    <Button type="submit">Add Game</Button>
                </Form>
            </div>
            </>
        );
    }
}

const mapStateToProps = state => ({ 
    gameDetails: state.gamesList.game 
});

export default connect(mapStateToProps)(CreateGamePage);