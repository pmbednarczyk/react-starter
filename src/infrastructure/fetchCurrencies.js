import API from "infrastructure/API";

export const fetchCurrencies = () => {
  return API.request({
    method: 'get',
    url: '/latest',
  })
  .then(response => ({ response }))
  .catch(error => ({ error }))
}

export const rebuildCurrenciesData = response => (
  Object.keys(response.data.rates)
  .map(key => ({ value: response.data.rates[key], label: key }))
);