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
  site: process.env.npm_config_site,
  url: process.env.npm_config_url ? process.env.npm_config_url : 'http://localhost',
  port: process.env.npm_config_port ? `:${process.env.npm_config_port}` : ':8080',
};

export default variables;
