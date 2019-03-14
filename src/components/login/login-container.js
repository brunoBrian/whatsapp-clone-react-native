import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getEmail, getPassword } from './login-actions';
import Login from './login';

const mapStateToProps = state => ({ 
  email: state.login.email,
  password: state.login.password
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getEmail,
  getPassword
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Login);

