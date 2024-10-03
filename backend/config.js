require('dotenv').config({ path: './.env' });

const config = {
  jwtSecret: process.env.JWT_SECRET,
  mongoUrl: process.env.MONGODB_URL,
};

module.exports = config;