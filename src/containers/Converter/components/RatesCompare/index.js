import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import LoaderAnimation from 'components/other/LoaderAnimation';

import './styles.module.scss';

const DEFAULT_REFRESH_TIME = 10000;

class RatesCompare extends Component {
  componentDidMount() {
    this.getCurrencyRates();
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  getCurrencyRates = () => {
    const { convertCurrencies } = this.props;
    convertCurrencies();
    if (this.interval) clearInterval(this.interval);

    this.interval = setInterval(() => {
      convertCurrencies();
    }, DEFAULT_REFRESH_TIME);
  }

  renderCurrenciesRatio = (data) => {
    const {
      currencyToSell,
      currencyToBuy,
      isProcessing,
      isProcessed,
    } = data;
    if (!isProcessing && !isProcessed) return null;
    if (isProcessing  && !isProcessed) return <LoaderAnimation isLoading />;

    return (
      <span>
        {`${currencyToSell.rate} ${currencyToSell.label} = ${currencyToBuy.rate} ${currencyToBuy.label}`}
      </span>
    );
  }

  render() {
    const ratesCompareClassnames = classNames({
      ratesCompareContainer: true,
    });

    return (
      <div className={ratesCompareClassnames}>
        <h1>Example data fetch with Axios and Redux Sagas.</h1>
        {this.renderCurrenciesRatio(this.props.currenciesRates)}
      </div>
    );
  }
}

RatesCompare.propTypes = {
  convertCurrencies: PropTypes.func.isRequired,
};

export default RatesCompare;
