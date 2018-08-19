import React, { Component } from 'react';

import MortalityList from '../containers/MortalityList';
import SearchBar from '../containers/SearchBar';

const DEFAULT_COUNTRY = 'France'

class App extends Component {
  render() {
    return (
      <div>
        <SearchBar defaultCountry={DEFAULT_COUNTRY} />
        <MortalityList/>
      </div>
    )
  }
}

export default App
