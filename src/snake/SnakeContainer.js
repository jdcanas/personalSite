import { connect } from 'react-redux';
import Snake from './Snake';
import { directionPressed } from '../actions/index';

const mapStateToProps = state => ({
    direction: state.direction,
});

const mapDispatchToProps = dispatch => ({
    directionPressed: (direction) => {
      dispatch(directionPressed(direction));
    },
});

const SnakeContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Snake);
    

export default SnakeContainer;