import React from 'react';
import ReactPlayer from 'react-player';


const PlayerCmp = (props) => {
    let { track } = props;
    return (
        <section className="player-cmp-container">
            <div className="track-details">
                Genre: {track.genre}<br />
            </div>
            <div className="player-container">
                <ReactPlayer url={track.permalink_url} volume={null} width="100%" height="unset" />
            </div>

        </section>
    )
}

export default PlayerCmp