import { connect } from 'react-redux';
import * as actions from '../actions';
import Buttons from '../components/Buttons';

const mapDispatchToProps = dispatch => ({
  onAdd: () => dispatch(actions.addCounter()),
  onRemove: () => dispatch(actions.removeCounter()),
});

const ButtonsContainer = connect(
  null,
  mapDispatchToProps,
)(Buttons);

export default ButtonsContainer;
