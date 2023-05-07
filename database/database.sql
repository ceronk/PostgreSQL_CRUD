CREATE DATABASE postgresql_RESTAPI; 

CREATE TABLE users(
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(40) NOT NULL,
  email TEXT NOT NULL
);

INSERT INTO users (name, email) values 
('Pedro Pascal', 'pascalispunk@gmail.com'),
('Mark Hamill', 'markhamill@gmail.com'),
('Temuera Morrison', 'tem_morrison@gmail.com');

SELECT * FROM users;

SELECT * FROM users WHERE (id = 8);

UPDATE users 
SET name = 'Dave Prowse', email = 'daveprowse@gmail.com'
WHERE (id = 9);

DELETE FROM users WHERE (id = 8);