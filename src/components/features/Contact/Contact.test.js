import React from 'react';
import {shallow} from 'enzyme';
import Contact from './Contact';

const select = {
  dayPart: '.dayPart',
  name: '.name',
  number: '.number',
};

const mockProps = {
  dayPart: 'sample day part',
  name: 'sample contact name',
  number: 'sample phone number',
};

describe('Component Contact', () => {

  it('should render component without error', () => {
    const component = shallow(<Contact />);
    expect(component).toBeTruthy();
  });

  it('should render correctly three elements', () => {
    const component = shallow(<Contact />);
    expect(component.exists(select.dayPart)).toEqual(true);
    expect(component.exists(select.name)).toEqual(true);
    expect(component.exists(select.number)).toEqual(true);
  });

  it('should render correct day part, name and phone number', () => {
    const component = shallow(<Contact {...mockProps} />);
    expect(component.find(select.dayPart).text()).toEqual(mockProps.dayPart);
    expect(component.find(select.name).text()).toEqual(mockProps.name);
    expect(component.find(select.number).text()).toEqual(mockProps.number);
  });

});

const trueDate = Date;
const mockDate = (customDate) => class extends Date {
  constructor(...args) {
    if(args.length){
      super(...args);
    } else {
      super(customDate);
    }
    return this;
  }
  static now(){
    return (new Date(customDate)).getUTCHours();
  }
};

const checkDayPartAtTime = (time, expectedDayPart) => {
  it(`should show correct at ${time}`, () => {
    global.Date = mockDate(`2019-05-15T${time}.135Z`);

    const component = shallow(<Contact {...mockProps} />);
    const renderedTime = component.find(select.dayPart).text();
    expect(renderedTime).toEqual(expectedDayPart);

    global.Date = trueDate;
  });
};

describe('Component Contact with mocked Date', () => {
  checkDayPartAtTime('08:00:00', '08:00-12:00');
  checkDayPartAtTime('11:59:59', '08:00-12:00');
  checkDayPartAtTime('10:45:19', '08:00-12:00');
  checkDayPartAtTime('12:00:00', '12:00-16:00');
  checkDayPartAtTime('15:59:59', '12:00-16:00');
  checkDayPartAtTime('21:45:19', '16:00-22:00');
});
