import dotenv from 'dotenv';

dotenv.config();

const variables = {
  pathLogin: '/wp-login.php',
  selectorLogin: '#user_login',
  selectorPass: '#user_pass',
  username: process.env.UN,
  password: process.env.PW,
  pipeline: process.env.PIPELINE,
  timeout: process.env.TIMEOUT,
};

export default variables;
