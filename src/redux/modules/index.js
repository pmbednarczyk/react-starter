import { combineReducers } from 'redux';
import currencies from './currenciesModule';
import currenciesRates from './currenciesRatesModule';

const rootReducer = combineReducers({
  currencies,
  currenciesRates,
});

export default rootReducer;
