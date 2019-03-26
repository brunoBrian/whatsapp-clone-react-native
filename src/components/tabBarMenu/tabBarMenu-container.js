import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addContactHideSuccessMessage } from '../addContact/addContact-actions';
import TabBarMenu from './tabBarMenu';

const mapStateToProps = state => ({ 
  success: state.addContact.success,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  addContactHideSuccessMessage
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TabBarMenu);

