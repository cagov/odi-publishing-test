import dotenv from 'dotenv';

dotenv.config();

// @todo It would better if this increments but this will get us started.

const variablesWP = {
  pathLogin: '/wp-login.php',
  selectorLogin: '#user_login',
  selectorPass: '#user_pass',
  username: process.env.UN,
  password: process.env.PW,
};

export default variablesWP;
