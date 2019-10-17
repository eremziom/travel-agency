import React from 'react';
import {Row, Col} from 'react-flexbox-grid';
import OrderSummary from '../OrderSummary/OrderSummary';
import PropTypes from 'prop-types';

class OrderForm extends React.Component {

  static propTypes = {
    tripCost: PropTypes.number,
    options: PropTypes.node,
  }

  render(){
    const {tripCost, options} = this.props;
    return(
      <Row>
        <Col xs={12}>
          <OrderSummary cost={tripCost} options={options}/>

        </Col>
      </Row>
    );
  }
}

export default OrderForm;
