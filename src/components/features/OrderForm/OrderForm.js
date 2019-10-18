import React from 'react';
import {Row, Col} from 'react-flexbox-grid';
import OrderSummary from '../OrderSummary/OrderSummary';
import PropTypes from 'prop-types';
import pricingArray from '../../../data/pricing.json';
import OrderOption from '../OrderOption/OrderOption';

class OrderForm extends React.Component {

  static propTypes = {
    tripCost: PropTypes.string,
    options: PropTypes.object,
  }

  render(){
    const {tripCost, options} = this.props;
    const pricing = pricingArray;
    return(
      <Row>
        {pricing.map(option => (
          <Col md={4} key={option.id}>
            <OrderOption {...option} currentValue={options[option.id]} />
          </Col>
        ))}
        <Col xs={12}>
          <OrderSummary cost={tripCost} options={options}/>

        </Col>
      </Row>
    );
  }
}

export default OrderForm;
