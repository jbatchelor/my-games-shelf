import axios from 'axios';

export default axios.create({
    baseURL: '//localhost:3004'
});

export const listGames = () => {
    return axios.get('//localhost:3004/games/all')
                    .then(response => response.data);
};

export const getGame = (gameId) => {
    return axios.get(`//localhost:3004/games/${gameId}`)
                    .then(response => response.data);
};

export const createGame = (game) => {
    return axios.post('//localhost:3004/create', game)
                    .then(response => response.data);
};

export const updateGame = (gameId, game) => {
    return axios.put(`//localhost:3004/${gameId}/update`, game)
                    .then(response => response.data);
};

export const removeGame = (gameId) => {
    return axios.delete(`//localhost:3004/${gameId}/delete`)
                    .then(response => response.data);
};
