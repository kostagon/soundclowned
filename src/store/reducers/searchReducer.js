let searchesFromStorage = sessionStorage['recent-searches'] ?
    JSON.parse(sessionStorage.getItem('recent-searches')) :
    ['Pink Floyd', 'Wish you were here', 'A$AP Rocky - Pharsyde (Ft. Joe Fox)'];

const initState = {
    searches: searchesFromStorage
}

const searchReducer = (state = initState, action) => {
    switch (action.type) {
        case 'SET_SEARCHES':
            return {
                searches: [...action.searches]
            }
        case 'GET_SEARCHES':
            return state.searches;
        case 'UPDATE_SEARCHES':
            return {
                ...state,
                searches: action.searches
            }
        default:
            return state;
    }
}

export default searchReducer;