import { all } from 'redux-saga/effects';
import { watchFetchGames, watchFetchGameDetails, watchCreateGame } from "./watcher";

export default function* startForeman() {
    yield all([
        watchFetchGames(),
        watchFetchGameDetails(),
        watchCreateGame()
    ]);
}