import * as types from './Games-Types';

const defaultGamesState = {
    games: []
};

const Game = (state = defaultGamesState, action) => {
    switch(action.type) {
        case types.LIST_GAMES:
            return {
                games: action.payload
            };
        default:
            return state;
    }
};

export default Game;