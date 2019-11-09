import { call, put, takeEvery } from 'redux-saga/effects'
import { LOAD_CURRENCIES, LOAD_CURRENCIES_SUCCESS, LOAD_CURRENCIES_FAIL } from 'modules/currenciesModule';
import { fetchCurrencies as loadCurrenciesAxios, rebuildCurrenciesData } from 'infrastructure/fetchCurrencies';

function* fetchCurrencies() {
  const { response, error } = yield call(loadCurrenciesAxios);
  if (response) {
    yield put({ type: LOAD_CURRENCIES_SUCCESS, data: rebuildCurrenciesData(response) })
  } else {
    yield put({ type: LOAD_CURRENCIES_FAIL, data: error })
  }
}

function* fetchCurrenciesSaga() {
  yield takeEvery(LOAD_CURRENCIES, fetchCurrencies);
}
export default fetchCurrenciesSaga;