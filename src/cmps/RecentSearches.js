import React from 'react';
import { connect } from 'react-redux';
import { getTracks } from '../store/actions/trackActions';

const RecentSearches = (props) => {
    const { searches, getTracks } = props;

    return (
        <section className="recent-searches-container">
            <ul className="clean-list">
                <li>Recent Searches:</li>
                {searches.map(searchStr => {
                    return <li className="list-link" key={searchStr} onClick={() => { getTracks(searchStr) }}>{searchStr}</li>
                })}
            </ul>
        </section>
    )
}

const mapStateToProps = (state) => {
    return {
        searches: state.search.searches
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getTracks: (searchStr) => dispatch(getTracks(searchStr))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RecentSearches)
