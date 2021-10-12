import dotenv from "dotenv";
dotenv.config();

const config = {
  wp_url: "https://dev-drought-ca-gov.pantheonsite.io",
  wp_login_path: "/wp-login.php",
  selector_login: "#user_login",
  selector_pass: "#user_pass",
  username: process.env.UN,
  password: process.env.PW,
};

export default config;
