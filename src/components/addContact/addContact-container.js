import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getEmail, addContact } from './addContact-actions';
import AddContact from './addContact';

const mapStateToProps = state => ({ 
  email: state.addContact.email,
  error: state.addContact.error,
  loading: state.addContact.loading,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getEmail,
  addContact,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AddContact);

