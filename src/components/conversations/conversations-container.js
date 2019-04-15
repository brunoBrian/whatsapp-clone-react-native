import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getInputMessage, sendInputMessage, listMessages } from './conversations-actions';
import Conversations from './conversations';

const mapStateToProps = state => ({ 
  inputMessage: state.conversation.inputMessage,
  messagesData: state.conversation.messagesData,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getInputMessage,
  sendInputMessage,
  listMessages
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Conversations);

