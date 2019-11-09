export const CONVERT_CURRENCIES = ' selectedCurrencies/CONVERT_CURRENCIES';
export const CONVERT_CURRENCIES_SUCCESS = 'selectedCurrencies/CONVERT_CURRENCIES_SUCCESS';
export const CONVERT_CURRENCIES_FAIL = 'selectedCurrencies/CONVERT_CURRENCIES_FAIL';

const initialState = {
    isProcessing: false,
    isProcessed: false,
    currencyToSell: {
      label: '',
      rate: 0,
    },
    currencyToBuy: {
      label: '',
      rate: 0,
    },
};

const currenciesRatesModule = (state = initialState, action = {}) => {
  switch (action.type) {
    case CONVERT_CURRENCIES:
      return { ...state, isProcessing: true };
    case CONVERT_CURRENCIES_SUCCESS: {
      const { rates, base, currencyToBuyLabel } = action.data;

      return {
        ...state,
          isProcessing: false,
          isProcessed: true,
          currencyToSell: {
            ...state.currencyToSell,
            label: base,
            rate: rates[base],
          },
          currencyToBuy: {
            ...state.currencyToBuy,
            label: currencyToBuyLabel,
            rate: rates[currencyToBuyLabel],
          },
      };
    }
    case CONVERT_CURRENCIES_FAIL:
      return {
        ...state,
          isProcessing: false,
          isProcessed: false,
      };
    default:
      return state;
  }
};

export const convertCurrencies = () => ({
  type: CONVERT_CURRENCIES,
});

export default currenciesRatesModule;
