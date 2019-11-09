import API from "infrastructure/API";

export const convertCurrencies = ({ currencyToSell, currencyToBuy }) => {
  return API.request({
    method: 'get',
    url: '/latest',
    params: {
      symbols: `${currencyToSell.label},${currencyToBuy.label}`,
      base: currencyToSell.label,
    },
  })
  .then(response => ({ response }))
  .catch(error => ({ error }))
}

export const getCurrencyToBuyLabel = (responseData) => {
  const { rates, base } = responseData;
  return Object.keys(rates).find(el => el !== base);
};