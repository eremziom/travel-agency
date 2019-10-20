import React from 'react';
import styles from './OrderOption.scss';
import {formatPrice} from '../../../utils/formatPrice';
import PropTypes from 'prop-types';

const OrderOptionNumber = ({currentValue, setOrderOption, limits, price}) => (
  <div className={styles.number}>
    <input className={styles.inputSmall} value={currentValue} type='number'
      onChange={event => setOrderOption(event.currentTarget.value)}
      min={limits.min} max={limits.max}
    />
    ({formatPrice(price)})
  </div>
);

OrderOptionNumber.propTypes = {
  currentValue: PropTypes.node,
  setOrderOption: PropTypes.func,
  limits: PropTypes.object,
  price: PropTypes.string,
};

export default OrderOptionNumber;
