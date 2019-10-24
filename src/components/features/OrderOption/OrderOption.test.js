import React from 'react';
import {shallow} from 'enzyme';
import OrderOption from './OrderOption';

describe('Component OredrOption', () => {
  it('should render correctly', () => {
    const expectedType = 'sample type';
    const expectedName = 'sample name';
    const component = shallow(<OrderOption type={expectedType} name={expectedName}/>);

    expect(component).toBeTruthy();
  });

  it('should return empty object if called without required props', () => {
    const component = shallow(<OrderOption />);

    expect(component).toEqual({});
  });

  it('should render correct title', () => {
    const expectedTitle = 'sample title';
    const expectedType = 'dropdown';
    const component = shallow(<OrderOption name={expectedTitle} type={expectedType}/>);

    expect(component.find('.title').text()).toEqual(expectedTitle);
  });
});
