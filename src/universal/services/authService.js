const authService = {
  authenticate: (email, password) => {
    if (email === 'admin@gmail.com' && password === 'admin') {
      return true;
    } else {
      return false;
    }
  }
};

export default authService;