import { put, call } from "redux-saga/effects";
import { listGames, getGame, createGame, updateGame, removeGame } from "../APIs/Games";
import * as types from "../constants/actionTypes";

export function* fetchGamesSaga({ payload }) {
    try{
        const games = yield call(listGames, payload);
        yield put({ type: types.GAMES_RECEIVED, games });
    } catch (error) {
        yield put({ type: types.GAMES_REQUEST_FAILED, error });
    }
}

export function* fetchGameDetails({ game }) {
    try{
        const gameDetails = yield call(getGame, game);
        yield put({ type: types.GAME_RECEIVED, game: gameDetails });
    } catch (error) {
        yield put({ type: types.GAME_REQUEST_FAILED, error });
    }
}

export function* addNewGameToLibrary(action) {
    try{
        // creating a game
        const { game } = action;
        const gameDetails = yield call(createGame, game);
        yield put({ type: types.GAME_CREATED, game: gameDetails });
    } catch (error) {
        yield put({ type: types.GAME_CREATE_FAILED, error });
    }
}

export function* updateGameDetails(action) {
    try{
        // updating a game
        const { game } = action;
        const gameDetails = yield call(updateGame, game._id, game);
        yield put({ type: types.GAME_UPDATED, game: gameDetails });
    } catch (error) {
        yield put({ type: types.GAME_UPDATE_FAILED, error });
    }
}

export function* removeGameFromLibrary({gameId}) {
    try{
        // delete a game
        debugger;
        const delResults = yield call(removeGame, gameId);
        yield put({ type: types.GAME_DELETED, data: delResults });
    } catch (error) {
        yield put({ type: types.GAME_DELETE_FAILED, error });
    }
}