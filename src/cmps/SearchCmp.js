import React, { useRef } from 'react';
import TrackPreview from './TrackPreview';
import { connect } from 'react-redux';
import { getTracks, setSelectedTrack } from '../store/actions/trackActions';
import { updateSearches } from '../store/actions/searchActions';
import { setPreviewStyle } from '../store/actions/utilActions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faForward, faList, faSearch } from '@fortawesome/free-solid-svg-icons';
import { faImages } from '@fortawesome/free-regular-svg-icons';

const SearchCmp = (props) => {
    const inputEl = useRef(null);
    const { tracks } = props;

    const handleSubmit = ev => {
        ev.preventDefault();
        let searchStr = inputEl.current.value;
        if (searchStr.length >= 3) {
            props.updateSearches(searchStr);
            props.getTracks(searchStr);
            inputEl.current.value = '';
        }
    }

    const onGetNextTracks = () => {
        props.getTracks();
    }

    const onTrackSelect = track => {
        props.setSelectedTrack(track);
    }

    const onPreviewChange = previewStyle => {
        if (previewStyle !== props.previewStyle) props.setPreviewStyle(previewStyle)
    }

    const searchResultsClass = `search-results-${props.previewStyle}`;

    return (
        <section className="search-cmp-container justify-self-center">
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Search SoundCloud" ref={inputEl} autoComplete="none" />
                <button><FontAwesomeIcon icon={faSearch} /></button>
            </form>
            {tracks && tracks.length ? (
                <section className={searchResultsClass}>
                    {tracks.map(track => {
                        return <TrackPreview track={track} onTrackSelect={onTrackSelect} previewStyle={props.previewStyle} key={track.id} />
                    })}
                    <div className="results-options">
                        <FontAwesomeIcon icon={faForward} onClick={onGetNextTracks} />
                        <div className="listing-options">
                            <div>
                                <FontAwesomeIcon icon={faList} onClick={() => {
                                    onPreviewChange('list')
                                }} />
                            </div>
                            <div>
                                <FontAwesomeIcon icon={faImages} onClick={() => {
                                    onPreviewChange('tile')
                                }} />
                            </div>
                        </div>
                    </div>
                </section>) : <section className="search-results justify-self-center">
                    <span>Your tracks will appear here</span>
                </section>
            }
        </section>
    )
}

const mapStateToProps = (state) => {
    return {
        tracks: state.track.tracks,
        previewStyle: state.util.previewStyle
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getTracks: (searchStr) => dispatch(getTracks(searchStr)),
        setSelectedTrack: (track) => dispatch(setSelectedTrack(track)),
        updateSearches: (searchStr) => dispatch(updateSearches(searchStr)),
        setPreviewStyle: (previewStyle) => dispatch(setPreviewStyle(previewStyle))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(SearchCmp)