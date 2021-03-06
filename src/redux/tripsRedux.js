/* SELECTORS */

export const getAllTrips = ({trips}) => trips;

export const getFilteredTrips = ({trips, filters}) => {
  let output = trips;

  // filter by search phrase
  if(filters.searchPhrase){
    const pattern = new RegExp(filters.searchPhrase, 'i');
    output = output.filter(trip => pattern.test(trip.name));
  }
  // TODO - filter by duration
  if(filters.duration.from>1 || filters.duration.to<14){
    output = output.filter(trip => trip.days>=filters.duration.from && trip.days<=filters.duration.to);
  }
  // TODO - filter by tags
  if(filters.tags.length > 0){
    output = output.filter(trip => trip.tags.includes(filters.tags[0]));
  }

  // TODO - sort by cost descending (most expensive goes first)

  return output;
};

export const getTripById = ({trips}, tripId) => {
  const filtered = trips;
  // TODO - filter trips by tripId

  console.log('filtering trips by tripId:', tripId, filtered);
  let element;
  for(element of filtered) {
    if(element.id == tripId){
      break;
    }
  }
  return filtered.length ? element : {error: true};
};

export const getTripsForCountry = ({trips}, countryCode) => {
  const filtered = trips;
  // TODO - filter trips by countryCode

  console.log('filtering trips by countryCode:', countryCode, filtered);
  const countryTrips = [];
  let element;
  for(element of filtered) {
    if(element.country.code == countryCode){
      countryTrips.push(element);
    }
  }
  return filtered.length ? countryTrips : [{error: true}];
};

/* ACTIONS */

/*
// action name creator
const reducerName = 'trips';
const createActionName = name => `app/${reducerName}/${name}`;

// action types


// action creators


// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}
 */
