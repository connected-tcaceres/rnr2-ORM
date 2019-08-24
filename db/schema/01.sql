DROP TABLE IF EXISTS users;
CREATE TABLE IF NOT EXISTS users (
  id serial PRIMARY KEY,
  first_name varchar(50) NOT NULL,
  last_name varchar(50)
);