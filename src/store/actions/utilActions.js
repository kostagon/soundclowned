export const setPreviewStyle = (previewStyle) => {
    localStorage.setItem('preview-style', previewStyle)
    return {
        type: 'SET_PREVIEW_STYLE',
        previewStyle
    }
}

export const getPreviewStyle = () => {
    return {
        type: 'GET_PREVIEW_STYLE'
    }
}
