require('dotenv').config();

module.exports = {

  development: {
    client: 'sqlite',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: './data/migrations'
    },
    useNullAsDefault: true
  },

  staging: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: './data/migrations'
    },
    useNullAsDefault: true
  },

  testing: {
    client: 'sqlite',
    connection: process.env.DATABASE_TEST_URL,
    migrations: {
      directory: './data/migrations'
    },
    useNullAsDefault: true
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: './data/migrations'
    },
    useNullAsDefault: true
  }

};