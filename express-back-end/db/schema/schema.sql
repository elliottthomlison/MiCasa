-- Drop and recreate Users table (Example)
DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS property CASCADE;
DROP TABLE IF EXISTS property_loc_points CASCADE;
DROP TABLE IF EXISTS preferences CASCADE;
DROP TABLE IF EXISTS favourites CASCADE;



CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  username VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  isProfileVisible BOOLEAN
);


CREATE TABLE property (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  address VARCHAR(255) NOT NULL,
  img_url VARCHAR(255) NOT NULL,
  city VARCHAR(225),
  latitude FLOAT NOT NULL,
  longitude FLOAT NOT NULL
);




CREATE TABLE preferences(
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  minimum_price FLOAT NOT NULL,
  bedroomNo INTEGER NOT NULL,
  bathroomNo INTEGER NOT NULL,
  size INTEGER NOT NULL,
  pets BOOLEAN NOT NULL,
  furnished BOOLEAN NOT NULL,
  laundry VARCHAR(255) NOT NULL,
  parking BOOLEAN NOT NULL,
  available_date VARCHAR(255) NOT NULL
);


CREATE TABLE favourites(
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  property_id INTEGER REFERENCES property(id) ON DELETE CASCADE
);
