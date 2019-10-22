import React from 'react';
import styles from './OrderOption.scss';
import {formatPrice} from '../../../utils/formatPrice';
import PropTypes from 'prop-types';
import Icon from '../../common/Icon/Icon';

const OrderOptionIcons = ({values, currentValue, setOrderOption}) => (

  <div
    className={styles.dropdown}
  >
    {values.map(value => (
      <div
        className={`${styles.icon} ${value.id == currentValue ? styles.iconActive : ''}`}
        key={value.id}
        onClick={() => setOrderOption(value.id)}
      >
        <Icon name={value.icon}/>
        {value.name} ({formatPrice(value.price)})
      </div>
    ))}
  </div>
);

OrderOptionIcons.propTypes = {
  values: PropTypes.array,
  required: PropTypes.bool,
  currentValue: PropTypes.node,
  setOrderOption: PropTypes.func,
};

export default OrderOptionIcons;
