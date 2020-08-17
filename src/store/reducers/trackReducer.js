const initState = {
    tracks: [],
    selectedTrack: null,
    nextTracksUrl: ''
}

const trackReducer = (state = initState, action) => {
    switch (action.type) {
        case 'SET_TRACKS':
            const { collection } = action.tracks;
            let next_href = action.tracks.next_href;
            return {
                ...state,
                tracks: collection,
                nextTracksUrl: next_href
            }
        case 'SET_SELECTED_TRACK':
            const { track } = action;
            return {
                ...state,
                selectedTrack: track
            }
        default:
            return state;
    }
}

export default trackReducer;