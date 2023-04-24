/*
Este módulo es un servicio que proporciona una función authenticate
para la autenticación de inicio de sesión.

La función authenticate toma dos parámetros, email y password,
y los compara con un correo electrónico y una contraseña predeterminados
*/

const authService = {
  authenticate: (email, password) => email === 'admin@gmail.com' && password === 'admin'
};


export default authService;