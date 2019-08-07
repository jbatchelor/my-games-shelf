import { takeLatest } from "redux-saga/effects";
import { fetchGamesSaga, 
         fetchGameDetails, 
         addNewGameToLibrary, 
         updateGameDetails, 
         removeGameFromLibrary } from './gamesSaga';
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

export function* watchUpdateGame() {
    yield takeLatest(types.UPDATE_GAME, updateGameDetails);
}

export function* watchDeleteGame() {
    yield takeLatest(types.DELETE_GAME, removeGameFromLibrary);
}