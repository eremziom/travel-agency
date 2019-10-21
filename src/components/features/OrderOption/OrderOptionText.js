import React from 'react';
import styles from './OrderOption.scss';
import PropTypes from 'prop-types';

const OrderOptionText = ({currentValue, id, setOrderOption}) => (
  <div className={styles.number}>{console.log('idid: ', id)}

    <input type='text' value={currentValue} placeholder={id=='name' ? 'type your name please' : 'type your contact please'}
      onChange={event => setOrderOption(event.currentTarget.value)}
    />
  </div>
);

OrderOptionText.propTypes = {
  currentValue: PropTypes.array,
  setOrderOption: PropTypes.func,
  id: PropTypes.string,
};

export default OrderOptionText;
