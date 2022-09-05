import 'dotenv/config'

export const SERVER = {
  PORT: process.env.PORT || 3333,
  NODE_ENV: process.env.NODE_ENV || 'development',
}

export const DATABASE = {
  DB_NAME: process.env.DB_NAME || null,
  DB_DIALECT: process.env.DB_DIALECT || 'mysql',
  DB_HOST: process.env.DB_HOST || null,
  DB_USERNAME: process.env.DB_USERNAME || null,
  DB_PASSWORD: process.env.DB_PASSWORD || null,
}

export const ENCRYPTION = {
  KEY: process.env.ENCRYPTION_KEY || '',
  IV: process.env.ENCRYPTION_IV,
}
