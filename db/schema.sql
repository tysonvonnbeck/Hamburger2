### Schema

CREATE DATABASE fajgfk37c4ipjm37;
USE fajgfk37c4ipjm37;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	eaten BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);
