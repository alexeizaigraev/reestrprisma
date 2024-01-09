DROP TABLE IF EXISTS users;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name TEXT,
  email TEXT UNIQUE NOT NULL,
  password TEXT UNIQUE NOT NULL,
  subscription TEXT,
  status TEXT,
  token TEXT UNIQUE,
  avatarurl TEXT UNIQUE,
  verify BOOLEAN DEFAULT FALSE,
  verificationtoken TEXT UNIQUE,
  createdat DATE DEFAULT LOCALTIMESTAMP,
  updateat DATE
);
