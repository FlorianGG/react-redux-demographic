import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { GET_MORTALITY } from '../actions';
import MortalityListItem from '../components/MortalityListItem';

class MortalityList extends Component {
  render() {
    const {mortalities} = this.props;
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Pays</th>
              <th>Hommes</th>
              <th>Femmes</th>
            </tr>
          </thead>
          <tbody>

            {mortalities.lenght && mortalities.map((data) => {
                return (<MortalityListItem key={data.country}/>)
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

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ getCountries, getMortality }, dispatch)
// }
export default connect(mapStateToProps)(MortalityList);
