import { takeLatest } from "redux-saga/effects";
import { fetchGamesSaga, fetchGameDetails } from './gamesSaga';
import * as types from "../constants/actionTypes";

export function* watchFetchGames() {
    yield takeLatest(types.FETCH_GAMES, fetchGamesSaga);
}

export function* watchFetchGameDetails() {
    yield takeLatest(types.FETCH_GAME, fetchGameDetails);
}