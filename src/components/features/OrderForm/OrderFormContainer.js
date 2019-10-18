import {connect} from 'react-redux';
import OrderForm from './OrderForm';
import { getOrderOptions, setOrderOption } from '../../../redux/orderRedux';

const mapStateToProps = state => ({
  options: getOrderOptions(state),
});

const mapDispatchtoProps = dispatch => ({
  setOrderOption: argument => dispatch(setOrderOption({argument})),
});

export default connect(mapStateToProps, mapDispatchtoProps)(OrderForm);
