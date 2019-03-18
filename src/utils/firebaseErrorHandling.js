export const registerError = error => {
  switch(error) {
    case 'auth/email-already-in-use':
      return 'Já existe uma conta com esse e-mail!';
    case 'auth/invalid-email':
      return 'E-mail inválido. Favor cadastrar um e-amil válido';
    case 'auth/operation-not-allowed':
      return 'Essa conta está desativada. Entre em contato com o administrador';
    case 'auth/weak-password':
      return 'O campo de senha deve ter no mínimo 6 caracteres';
    default:
      return 'Erro no cadastro!';
  }
}

export const loginError = error => {
  switch(error) {
    case 'auth/invalid-email':
      return 'Endereço de e-mail inválido!';
    case 'auth/wrong-password':
      return 'Usuario ou senha inválidos!';
    case 'auth/user-not-found':
      return 'Usuario ou senha inválidos!';
    case 'auth/user-disabled':
      return 'Usuário desabilitado. Favor entrar em contato com o administrador';
    default:
      return 'Erro na autenticação!';
  }
}