import React from 'react';
import {shallow} from 'enzyme';
import TripSummary from './TripSummary';

describe('Component TripSummary', () => {
  it('should generate correct link', () => {
    const expectedId = 'abc';
    const expectedLink = '/trip/'+expectedId;
    const component = shallow(<TripSummary id={'abc'}/>);

    expect(component.find('.link').prop('to')).toEqual(expectedLink);
  });

  it('has correct image link and alt', () => {
    const expectedSrc = 'sample link';
    const expectedAlt = 'sample alt';
    const component = shallow(<TripSummary image={expectedSrc} name={expectedAlt}/>);

    expect(component.find('img').prop('src')).toEqual(expectedSrc);
    expect(component.find('img').prop('alt')).toEqual(expectedAlt);
  });

  it('should render correct name, cost and days', () => {
    const expectedData = ['sample name', '300$', 12];
    const sampleText = expectedData[2]+' daysfrom '+expectedData[1];
    const component = shallow(<TripSummary name={expectedData[0]} cost={expectedData[1]} days={expectedData[2]}/>);

    expect(component.find('.title').text()).toEqual(expectedData[0]);
    expect(component.find('.details').text()).toEqual(sampleText);
  });

  it('should render without crashing', () => {
    const component = shallow(<TripSummary />);

    expect(component).toBeTruthy();
  });

  it('should render correct tags', () => {
    const expectedTags = ['tag one', 'tag-two', 'tag-three'];
    const component = shallow(<TripSummary tags={expectedTags}/>);

    for(let tag of expectedTags){
      expect(component.find('.tag').at(expectedTags.indexOf(tag)).text()).toEqual(tag);
    }
  });

  it('should not render tags', () => {
    const expectedTags = undefined;
    const component = shallow(<TripSummary tags={expectedTags}/>);

    expect(component.find('.tags').exists()).toBeFalsy();
  });
});
