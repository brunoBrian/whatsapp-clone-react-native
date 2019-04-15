import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getMessage, sendMessage } from './conversations-actions';
import Conversations from './conversations';

const mapStateToProps = state => ({ 
  message: state.conversation.message,
  activeContactClicked: state.contacts.activeContactClicked,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getMessage,
  sendMessage
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Conversations);

