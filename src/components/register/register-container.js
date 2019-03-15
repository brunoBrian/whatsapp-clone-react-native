import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getName, registerUser } from './register-actions';
import { getEmail, getPassword } from '../login/login-actions';
import Register from './register';

const mapStateToProps = state => ({ 
  name: state.register.name,
  success: state.register.success,
  error: state.register.error,
  email: state.login.email,
  password: state.login.password,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getEmail,
  getPassword,
  getName, 
  registerUser
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Register);

