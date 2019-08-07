import { all } from 'redux-saga/effects';
import { watchFetchGames, 
         watchFetchGameDetails, 
         watchCreateGame, 
         watchUpdateGame,
         watchDeleteGame } from "./watcher";

export default function* startForeman() {
    yield all([
        watchFetchGames(),
        watchFetchGameDetails(),
        watchCreateGame(),
        watchUpdateGame(),
        watchDeleteGame()
    ]);
}