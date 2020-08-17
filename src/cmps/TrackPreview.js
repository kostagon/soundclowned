import React from 'react';

const TrackPreview = ({ track, onTrackSelect, previewStyle }) => {
    return (
        previewStyle === 'list' ?
            <div className="track-preview-list-container" onClick={() => { onTrackSelect(track) }}>
                <span className="preview-title align-self-center">
                    {track.title} - {track.genre}
                </span>
            </div> :
            <div className="track-preview-tile-container" onClick={() => { onTrackSelect(track) }}>
                <p className="overflow-hidden line-clamp">{track.title}</p>
                {track.artwork_url ?
                    <img className="justify-self-end align-self-center" src={track.artwork_url} alt="artwork" /> :
                    <span className="strong align-self-center justify-self-end">No image</span>
                }
            </div>
    )
}

export default TrackPreview;