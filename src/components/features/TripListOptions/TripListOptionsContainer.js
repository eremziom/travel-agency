import {connect} from 'react-redux';
import TripListOptions from './TripListOptions';
import {getAllTags} from '../../../redux/tagsRedux';
import {getAllFilters, changeSearchPhrase, changeSearchDuration, changeSearchFilter} from '../../../redux/filtersRedux';

const mapStateToProps = (state) => ({
  tags: getAllTags(state),
  filters: getAllFilters(state),
});

const mapDispatchToProps = (dispatch) => ({
  changeSearchPhrase: phrase => dispatch(changeSearchPhrase(phrase)),
  changeSearchDuration: (type, value, fil) => dispatch(changeSearchDuration({
    type,
    changeFrom: {
      from: value,
      to: fil.duration.to,
    },
    changeTo: {
      from: fil.duration.from,
      to: value,
    },
  })),

  changeSearchFilter: tag => dispatch(changeSearchFilter(tag)),
  // TODO - add more dispatchers for other filters
});

export default connect(mapStateToProps, mapDispatchToProps)(TripListOptions);
