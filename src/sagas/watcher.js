import { takeLatest } from "redux-saga/effects";
import { fetchGamesSaga, fetchGameDetails, addNewGameToLibrary } from './gamesSaga';
import * as types from "../constants/actionTypes";

export function* watchFetchGames() {
    yield takeLatest(types.FETCH_GAMES, fetchGamesSaga);
}

export function* watchFetchGameDetails() {
    yield takeLatest(types.FETCH_GAME, fetchGameDetails);
}

export function* watchCreateGame() {
    yield takeLatest(types.CREATE_GAME, addNewGameToLibrary);
}