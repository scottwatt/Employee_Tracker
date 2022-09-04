DROP DATABASE IF EXISTS employee_info_db;

CREATE DATABASE employee_info_db;

USE employee_info_db;

CREATE TABLE department (

id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,

dep_name VARCHAR(30) NOT NULL

);

CREATE TABLE roles (

id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,

title VARCHAR(30) NOT NULL,

salary DECIMAL(10,2) NOT NULL,

department_id INT NOT NULL

);

CREATE TABLE employee (

id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,

first_name VARCHAR(30) NOT NULL,

last_name VARCHAR(30) NOT NULL,

role_id INT NOT NULL,

manager_id INT

);