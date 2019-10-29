import React from 'react';
import {Row, Col} from 'react-flexbox-grid';
import OrderSummary from '../OrderSummary/OrderSummary';
import PropTypes from 'prop-types';
import pricingArray from '../../../data/pricing.json';
import OrderOption from '../OrderOption/OrderOption';
import Button from '../../common/Button/Button';
import { formatPrice } from '../../../utils/formatPrice';
import { calculateTotal } from '../../../utils/calculateTotal';
import settings from '../../../data/settings';

const sendOrder = (options, tripCost) => {
  console.log('options: ', options, ' tripCost: ', tripCost);
  const totalCost = formatPrice(calculateTotal(tripCost, options));
  console.log('options: ', options, ' tripCost: ', tripCost);

  const payload = {
    ...options,
    totalCost,
  };

  const url = settings.db.url + '/' + settings.db.endpoint.orders;

  const fetchOptions = {
    cache: 'no-cache',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  };

  fetch(url, fetchOptions)
    .then(function(response){
      return response.json();
    }).then(function(parsedResponse){
      console.log('parsedResponse', parsedResponse);
    });
};

class OrderForm extends React.Component {

  static propTypes = {
    tripCost: PropTypes.string,
    options: PropTypes.object,
    setOrderOption: PropTypes.func,
  }

  render(){
    const {tripCost, options, setOrderOption} = this.props;
    const pricing = pricingArray;
    return(
      <Row>
        {pricing.map(option => (
          <Col md={4} key={option.id}>
            <OrderOption {...option} currentValue={options[option.id]} setOrderOption={setOrderOption} />
          </Col>
        ))}
        <Col xs={12}>
          <OrderSummary cost={tripCost} options={options}/>
          <Button onClick={() => sendOrder(options, tripCost)}>Order now!</Button>
        </Col>
      </Row>
    );
  }
}

export default OrderForm;
