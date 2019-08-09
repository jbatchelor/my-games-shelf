import * as types from "../constants/actionTypes";

export function fetchGames() {
   return { type: types.FETCH_GAMES }
}

export function getGame(game) {
   return { type: types.FETCH_GAME, game }
}

export function createGame(game) {
   return { type: types.CREATE_GAME, game }
}

export function updateGame(gameId, game) {
   return { type: types.UPDATE_GAME, gameId, game }
}

export function deleteGame(gameId) {
   return { type: types.DELETE_GAME, gameId }
}