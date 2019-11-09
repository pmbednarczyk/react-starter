import { all } from 'redux-saga/effects'
import fetchCurrenciesSaga from 'sagas/fetchCurrenciesSaga';
import currenciesRatesSaga from 'sagas/currenciesRatesSaga';

export default function* rootSaga() {
  yield all([
    fetchCurrenciesSaga(),
    currenciesRatesSaga()
  ])
}