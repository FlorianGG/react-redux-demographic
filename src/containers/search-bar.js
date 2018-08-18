import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getCountries } from '../actions';

class SearchBar extends Component {
  state = {
    selectedCountry: this.props.defaultCountry,
  }
  componentWillMount() {
    this.props.getCountries()
  }

  renderSelectBox() {
    const { countries } = this.props
    if (countries) {
      return (
        <select
          className="col-lg-12 form-control input-group"
          value={this.state.selectedCountry}
          onChange={this.search}
        >
          {countries.map(country => {
            return (
              <option key={country} value={country}>
                {country}
              </option>
            )
          })}
        </select>
      )
    } else {
      return <div>No country found</div>
    }
  }

  //arrow function to bind this
  search = e => {
    this.setState({ selectedCountry: e.target.value })
  }

  render() {
    return <div className="search-bar">{this.renderSelectBox()}</div>
  }
}

function mapStateToProps(state) {
  return {
    countries: state.countries,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getCountries }, dispatch)
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar)
