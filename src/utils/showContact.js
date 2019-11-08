import React from 'react';
import styles from '../components/features/Contact/Contact.scss';
import { data } from '../data/contact';

export const showContact = date => {

  const contactTemplate = renderContact(date);

  return contactTemplate;
};

const renderContact = date => {
  if(date >= 22 && date < 8){
    return(
      <div>
        <span>Open Hours: 08:00-22:00</span>
      </div>
    );
  }

  let contactData = data.morning;

  if(date >= 12 && date < 16){
    contactData = date.afternoon;
  }

  if(date >= 16 && date < 22){
    contactData = date.evening;
  }
  return(
    <span>
      <span className={styles.dayPart}>{contactData.dayPart}</span>
      <span className={styles.name}>{contactData.name}</span>
      <span className={styles.number}>{contactData.number}</span>
    </span>
  );
};
