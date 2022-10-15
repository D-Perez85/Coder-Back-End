SHOW DATABASES;
-- Crear una base de datos llamada 'mibase'
CREATE DATABASE mibase CHARACTER SET utf8;
-- Crear una tabla dentro de esa base con el nombre 'usuarios' que contenga los siguientes campos:
CREATE TABLE usuarios (
    id int NOT NULL AUTO_INCREMENT,
    nombre varchar NOT NULL(255),
    apellido varchar NOT NULL(255),
    edad int, 
    email varchar NOT NULL(255),
    lastname varchar(255),
    address varchar(255),
    PRIMARY KEY (id)
);

-- Insertar usuarios en esa tabla:
INSERT INTO usuarios (nombre, apellido, edad, email) VALUES 
    ("Juan", "Perez", 23, "jp@gmail.com"), 
    ("Pedro", "Mei", 21, "pm@gmail.com"),
    ("Juana", "Suarez", 25, "js@gmail.com") ;

-- Listar los usuarios agregados 
select * from usuarios;
--  Borrar el usuario con id = 2
DELETE FROM usuarios WHERE id = 2; 
-- Listar los usuarios restantes 
select * from usuarios;
-- Actualizar la edad del usuario con id = 1 a 24 años
UPDATE usuarios SET edad = 24 WHERE id = 1; 
-- Listar los registros editados 
select * from usuarios;
