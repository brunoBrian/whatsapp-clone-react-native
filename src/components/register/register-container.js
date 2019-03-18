import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getName, registerUser, getPassword } from './register-actions';
import { getEmail } from '../login/login-actions';
import Register from './register';

const mapStateToProps = state => ({ 
  name: state.register.name,
  error: state.register.error,
  loading: state.register.loading,
  password: state.register.password,
  email: state.login.email,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getEmail,
  getPassword,
  getName, 
  registerUser
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Register);

