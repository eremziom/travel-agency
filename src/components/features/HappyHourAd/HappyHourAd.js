import React from 'react';
import PropTypes from 'prop-types';
import styles from './HappyHourAd.scss';

class HappyHourAd extends React.Component{
  constructor(){
    super();
    setInterval(() => {
      this.forceUpdate();
    }, 1000);
  }

  static propTypes = {
    title: PropTypes.string,
    promoDescription: PropTypes.string,
  }

  getCountdownTime(){
    const currentTime = new Date();
    const nextNoon = new Date(Date.UTC(currentTime.getUTCFullYear(), currentTime.getUTCMonth(), currentTime.getUTCDate(), 12, 0, 0, 0));

    if(currentTime.getUTCHours() >= 12){
      nextNoon.setUTCDate(currentTime.getUTCDate()+1);
    }

    return Math.round((nextNoon.getTime() - currentTime.getTime())/1000);
  }

  render(){
    const {title, promoDescription} = this.props;
    const countTime = this.getCountdownTime();
    return(
      <div className={styles.component}>
        <h3 className={styles.title}>{title}</h3>
        {countTime > 82800 ? (
          <div className={styles.promoDescription}>{promoDescription}</div>) : (
          <div className={styles.promoDescription}>{this.getCountdownTime()}</div>
        )}
      </div>
    );
  }
}

export default HappyHourAd;
