import games from "../APIs/Games";
import * as types from "./Games-Types";

export const getGames = () => ({
   type: types.GAMES_LIST_WATCHER
});

export const listGames = (gamesList) => ({
   type: types.LIST_GAMES,
   payload: gamesList
});

// export const createGame = formValues => async dispatch => {
//     games.post('/games', formValues);
// };

