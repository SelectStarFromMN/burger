-- (CAREFUL!!) Drops the DB if it already exists --
-- DROP DATABASE IF EXISTS burgers_db;
-- Create a database --
CREATE DATABASE IF NOT EXISTS burgers_db;

-- Use db for the following statements --
USE burgers_db;

CREATE TABLE IF NOT EXISTS burgers (
  id int not null auto_increment,
  burger_name varchar(125) not null,
  devoured tinyint not null DEFAULT 0,

  primary key (id)
);

