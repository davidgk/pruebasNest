CREATE USER docker WITH PASSWORD 'password' CREATEDB;

CREATE DATABASE pruebas
WITH OWNER = docker
CONNECTION LIMIT = -1;

CREATE DATABASE pruebas_test
WITH OWNER = docker
CONNECTION LIMIT = -1;

