import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getName } from './cadastro-actions';
import { getEmail, getPassword } from '../login/login-actions';
import Cadastro from './cadastro';

const mapStateToProps = state => ({ 
  name: state.cadastro.name,
  email: state.login.email,
  password: state.login.password,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getEmail,
  getPassword,
  getName
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cadastro);

