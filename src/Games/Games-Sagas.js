import { put, takeEvery } from "redux-saga/effects";
import games from '../APIs/Games';
import { listGames } from './Games-Actions';
import * as types from './Games-Types';

function* gamesSaga() {
    const gamesList = yield games.get('/games/all');
    yield put(listGames(gamesList.data));
}

export default function* gamesWatcher(){
    yield takeEvery(types.GAMES_LIST_WATCHER, gamesSaga);
}