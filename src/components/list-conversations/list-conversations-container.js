import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getContactList } from './list-conversations-actions';
import { getNameAndEmailClicked } from '../contacts/contacts-actions';
import ListConversations from './list-conversations';

const mapStateToProps = state => ({ 
  contactListData: state.listConversation.contactListData,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getContactList,
  getNameAndEmailClicked
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ListConversations);