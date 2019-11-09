import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchCurrencies } from 'modules/currenciesModule';
import { convertCurrencies} from 'modules/currenciesRatesModule';
import PageLayout from 'components/layout/PageLayout';

import RatesCompare from './components/RatesCompare';

import './styles.module.scss';

class Converter extends Component {
  componentDidMount() {
    this.props.fetchCurrencies();
  }

  render() {
    const { currencies } = this.props;
    const content = (
      <div className="converterContainer">
        <div className="screenContainer">
          <RatesCompare
            currenciesRates={this.props.currenciesRates}
            convertCurrencies={this.props.convertCurrencies}
          />
        </div>
      </div>
    );

    if (!currencies.isProcessing && !currencies.isProcessed) {
      return null;
    }

    return (
      <>
        <PageLayout content={content} isLoading={currencies.isProcessing} />
      </>
    );
  }
}

Converter.propTypes = {
  convertCurrencies: PropTypes.func.isRequired,
  currencies: PropTypes.shape({
    data: PropTypes.array,
    isProcessing: PropTypes.bool,
    isProcessed: PropTypes.bool,
  }).isRequired,
};

const mapStateToProps = ({
  currencies,
  currenciesRates,
}) => ({
  currencies,
  currenciesRates,
});

const mapDispatchToProps = {
  convertCurrencies,
  fetchCurrencies,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Converter);
