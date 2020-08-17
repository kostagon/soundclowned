import storageService from "../../services/storageService";

export const loadSearches = () => {
    return (dispatch, getState) => {
        dispatch({ type: 'GET_SEARCHES' })
    }
}

export const setSearches = () => {
    return (dispatch, getState) => {
        const searches = storageService.get('recent-searches');
        dispatch({ type: 'SET_SEARCHES', searches })
    }
}

export const updateSearches = searchStr => {
    return (dispatch, getState) => {
        let { searches } = getState().search;
        console.log(searches);
        if (!searches.includes(searchStr)) {
            if (searches.length >= 5) {
                searches = searches.slice(0, 4);
            }
            searches.unshift(searchStr);
            storageService.set('recent-searches', searches);
            dispatch({ type: 'SET_SEARCHES', searches });
        }
    }
}