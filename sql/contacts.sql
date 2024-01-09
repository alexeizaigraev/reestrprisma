DROP TABLE IF EXISTS contacts;

CREATE TABLE contacts (
  id SERIAL PRIMARY KEY,
  n INTEGER DEFAULT 0,
  form TEXT DEFAULT 'Введите значение',
  nnumber TEXT DEFAULT 'Введите значение',
  fio TEXT NOT NULL,
  edrpu TEXT DEFAULT 'Введите значение',
  passport TEXT DEFAULT 'Введите значение',
  birthday TEXT DEFAULT 'Введите значение',
  registrationplase TEXT DEFAULT 'Введите значение',
  adress TEXT DEFAULT 'Введите значение',
  phone TEXT DEFAULT 'Введите значение',
  email TEXT NOT NULL UNIQUE,
  membershipfee NUMERIC(20,2) DEFAULT 0,
  share NUMERIC(20,2) DEFAULT 0,
  payshare NUMERIC(20,2) DEFAULT 0,
  avatarurl TEXT DEFAULT 'Введите значение',
  createdat DATE DEFAULT LOCALTIMESTAMP,
  updateat DATE,
  ownerid INTEGER NOT NULL,

  CONSTRAINT contacts_fkey_ownerid FOREIGN KEY (ownerid) REFERENCES users (id)
);
