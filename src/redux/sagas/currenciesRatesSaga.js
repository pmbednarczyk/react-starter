import { put, takeEvery, call } from 'redux-saga/effects'
import {
  CONVERT_CURRENCIES,
  CONVERT_CURRENCIES_SUCCESS,
  CONVERT_CURRENCIES_FAIL,
} from 'modules/currenciesRatesModule';
import { convertCurrencies as convertCurrenciesAxios, getCurrencyToBuyLabel } from 'infrastructure/currenciesRates';

const currenciesToConvertMock = {
  currencyToSell: {
    label: 'USD',
  },
  currencyToBuy: {
    label: 'PLN'
  }}

function* convertCurrencies() {
  const { response, error } = yield call(convertCurrenciesAxios, currenciesToConvertMock);
  if (response) {
    const currencyToBuyLabel = getCurrencyToBuyLabel(response.data)
    yield put({ type: CONVERT_CURRENCIES_SUCCESS, data: {...response.data, currencyToBuyLabel }})
  } else {
    yield put({ type: CONVERT_CURRENCIES_FAIL, data: error })
  }
}

function* currenciesRatesSaga() {
  yield takeEvery(CONVERT_CURRENCIES, convertCurrencies);
}
export default currenciesRatesSaga;