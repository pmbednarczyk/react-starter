export const LOAD_CURRENCIES = 'currencies/LOAD_CURRENCIES';
export const LOAD_CURRENCIES_SUCCESS = 'currencies/LOAD_CURRENCIES_SUCCESS';
export const LOAD_CURRENCIES_FAIL = 'currencies/LOAD_CURRENCIES_FAIL';

const initialState = {
  data: [],
  isProcessing: false,
  isProcessed: false,
};

const currencies = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_CURRENCIES:
      return { ...state, isProcessing: true, isProcessed: false };
    case LOAD_CURRENCIES_SUCCESS: {
      return {
        ...state, isProcessing: false, isProcessed: true, data: action.data,
      };
    }
    case LOAD_CURRENCIES_FAIL:
      return {
        ...state, isProcessing: false, isProcessed: false,
      };
    default:
      return state;
  }
};

export const fetchCurrencies = () => ({
  type: LOAD_CURRENCIES,
});

export default currencies;
