import React from 'react';
import { connect } from 'react-redux';

import HeaderCmp from './cmps/HeaderCmp';
import SearchCmp from './cmps/SearchCmp';
import RecentSearches from './cmps/RecentSearches';
import PlayerCmp from './cmps/PlayerCmp';
import FooterCmp from './cmps/FooterCmp.js';
import SvgCmp from './cmps/SvgCmp';

const App = props => {
  const { selectedTrack, searches } = props;
  return (
    <div className="App main-layout">
      <HeaderCmp />
      <SearchCmp />
      {selectedTrack &&
        <PlayerCmp track={selectedTrack} />
      }
      <SvgCmp />
      {searches.length > 0 &&
        <RecentSearches />
      }
      <FooterCmp />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    selectedTrack: state.track.selectedTrack,
    searches: state.search.searches
  }
}

export default connect(mapStateToProps, null)(App)
