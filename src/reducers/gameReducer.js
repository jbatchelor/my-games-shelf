import * as types from '../constants/actionTypes';

const initialState = { games: [], error: '' };

export default function (state = initialState, action) {
    switch(action.type) {
        case types.GAMES_RECEIVED:
            return { ...state, games: action.games };
        case types.GAMES_REQUEST_FAILED:
            return { ...state, error: action.error };
        case types.GAME_RECEIVED:
            return { ...state, game: action.game };
        case types.GAME_CREATED:
            return { ...state, game: action.game };
        case types.GAME_CREATE_FAILED:
            return { ...state, error: action.error };
        case types.GAME_UPDATED:
            return { ...state, game: action.game };
        case types.GAME_UPDATE_FAILED:
            return { ...state, error: action.error };
        case types.GAME_DELETED:
            return { ...state, game: action.game };
        case types.GAME_DELETE_FAILED:
            return { ...state, error: action.error };
        default:
            return state;
    }
}
