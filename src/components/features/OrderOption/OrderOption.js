import React from 'react';
import styles from './OrderOption.scss';

const OrderOption = (option) => {
  return(
    <h3 className={styles.title}>{option.name}</h3>
  );
};

export default OrderOption;
