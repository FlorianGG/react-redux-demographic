import { combineReducers } from 'redux';

import CountriesReducer from './reducerCountries';
import MortalityReducer from './reducerMortality';

const rootReducer = combineReducers({
  countries: CountriesReducer,
  mortality: MortalityReducer,
})

export default rootReducer
