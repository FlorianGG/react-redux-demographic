import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getMortality } from '../actions';
import MortalityListItem from '../components/MortalityListItem';

class MortalityList extends Component {
  componentWillMount (){
    this.props.getMortality(this.props.defaultCountry);
  }
  render() {
    const {mortalities} = this.props;
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Pays</th>
              <th className="col-md-6">Hommes</th>
              <th className="col-md-6">Femmes</th>
            </tr>
          </thead>
          <tbody>
            {
              mortalities.map((data) => {
                return (<MortalityListItem key={data.country} mortality={data}/>)
              })
            }
          </tbody>
        </table>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    mortalities: state.mortality,
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getMortality }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MortalityList);
