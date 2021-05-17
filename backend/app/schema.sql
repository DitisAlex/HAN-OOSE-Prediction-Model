DROP TABLE IF EXISTS user;
DROP TABLE IF EXISTS weather;
DROP TABLE IF EXISTS energy_production;
DROP TABLE IF EXISTS energy_consumption;
DROP TABLE IF EXISTS prediction_data;

CREATE TABLE IF NOT EXISTS user (
  user_id INTEGER PRIMARY KEY,
  username TEXT NOT NULL UNIQUE,
  password TEXT NOT NULL,
  isAdmin INTEGER NOT NULL,
  sign_up_date TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS weather (
  date TEXT NOT NULL,
  temperature REAL NOT NULL,
  cloud INTEGER NOT NULL,
  wind REAL NOT NULL,
  pressure INTEGER NOT NULL
);

CREATE TABLE IF NOT EXISTS energy_production (
  no INTEGER PRIMARY KEY,
  time [UNSIGNED BIG INT] NOT NULL,
  V1 REAL,
  V2 REAL,
  V3 REAL,
  I1 REAL,
  I2 REAL,
  I3 REAL,
  P1 REAL,
  P2 REAL,
  P3 REAL,
  Q1 REAL,
  Q2 REAL,
  Q3 REAL,
  S1 REAL,
  S2 REAL,
  S3 REAL,
  PF1 REAL,
  PF2 REAL,
  PF3 REAL,
  F REAL
);

CREATE TABLE IF NOT EXISTS energy_consumption (
  no INTEGER PRIMARY KEY,
  time [UNSIGNED BIG INT] NOT NULL,
  V1 REAL,
  V2 REAL,
  V3 REAL,
  I1 REAL,
  I2 REAL,
  I3 REAL,
  P1 REAL,
  P2 REAL,
  P3 REAL,
  Q1 REAL,
  Q2 REAL,
  Q3 REAL,
  S1 REAL,
  S2 REAL,
  S3 REAL,
  PF1 REAL,
  PF2 REAL,
  PF3 REAL,
  F REAL
);

CREATE TABLE IF NOT EXISTS prediction_data (
  prediction_id INTEGER PRIMARY KEY,
  predicted_on TEXT NOT NULL,
  predicted_date REAL NOT NULL,
  prediction TEXT NOT NULL
);