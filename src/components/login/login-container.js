import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getEmail, getPassword, userLogin, loginRegisterClick } from './login-actions';
import Login from './login';

const mapStateToProps = state => ({ 
  email: state.login.email,
  password: state.login.password,
  error: state.login.error,
  loading: state.login.loading
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getEmail,
  getPassword,
  userLogin,
  loginRegisterClick
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Login);

