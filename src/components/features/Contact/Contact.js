import React from 'react';
//import PropTypes from 'prop-types';
//import styles from './Contact.scss';
import {showContact} from '../../../utils/showContact';

class Contact extends React.Component {

  getTime(){
    const currentTime = new Date();
    const currentHour = currentTime.getUTCHours();

    return currentHour;
  }

  render(){
    const checkHour = this.getTime();
    //let {dayPart, name, number} = this.props;
    return showContact(checkHour);
  }

}

export default Contact;
