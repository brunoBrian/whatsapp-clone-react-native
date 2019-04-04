import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getListContacts } from './contacts-actions';
import Contacts from './contacts';

const mapStateToProps = state => ({ 
  contactsData: state.contacts.contactsData,
  error: state.contacts.error,
  loading: state.contacts.loading,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getListContacts
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);

