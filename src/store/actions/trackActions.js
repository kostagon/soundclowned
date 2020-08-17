import scService from '../../services/scService';

export const getTracks = (searchStr) => {
    return (dispatch, getState) => {
        let tracksPrm;
        if (searchStr) {
            // New Query
            tracksPrm = scService.getTracks(searchStr)
        } else {
            // Clicked on the 'Next' button
            let url = getState().track.nextTracksUrl;
            tracksPrm = scService.getNextTracks(url)
        }
        tracksPrm.then(tracks => {
            dispatch({ type: 'SET_TRACKS', tracks })
        }).catch(err => {
            console.log('There was an error fetching data. Error:', err)
        })
    }
}

export const setSelectedTrack = track => {
    return (dispatch, getState) => {
        dispatch({ type: 'SET_SELECTED_TRACK', track })
    }
}
