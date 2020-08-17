const initState = {
    previewStyle: localStorage.getItem('preview-style') ? localStorage.getItem('preview-style') : 'list'
}

const utilReducer = (state = initState, action) => {
    switch (action.type) {
        case 'GET_PREVIEW_STYLE':
            return state.previewStyle;
        case 'SET_PREVIEW_STYLE':
            return {
                ...state,
                previewStyle: action.previewStyle
            }
        default:
            return state;
    }
}

export default utilReducer;