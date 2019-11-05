import React from 'react';
import styles from '../components/features/Contact/Contact.scss';

export const showContact = dateArgument => {
  const data = {
    morning: {
      dayPart: '08:00-12:00',
      name: 'Amanda',
      number: '678.243.8455',
    },
    afternoon: {
      dayPart: '12:00-16:00',
      name: 'Tobias',
      number: '278.443.6443',
    },
    evening: {
      dayPart: '16:00-22:00',
      name: 'Helena',
      number: '167.280.3970',
    },
  };

  if(dateArgument>=8 && dateArgument<12){
    return(
      <span>
        <span className={styles.dayPart}>{data.morning.dayPart}</span>
        <span className={styles.name}>{data.morning.name}</span>
        <span className={styles.number}>{data.morning.number}</span>
      </span>
    );
  } else if(dateArgument>=12 && dateArgument<16){
    return(
      <span>
        <span className={styles.dayPart}>{data.afternoon.dayPart}</span>
        <span className={styles.name}>{data.afternoon.name}</span>
        <span className={styles.number}>{data.afternoon.number}</span>
      </span>
    );
  } else if(dateArgument>=16 && dateArgument<22){
    return(
      <span>
        <span className={styles.dayPart}>{data.evening.dayPart}</span>
        <span className={styles.name}>{data.evening.name}</span>
        <span className={styles.number}>{data.evening.number}</span>
      </span>
    );
  } else
    return(
      <div>
        <span>Open Hours: 08:00-22:00</span>
      </div>
    );
};
