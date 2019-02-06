# Masivian Comics

Para correr este proyecto, seguir los siguientes pasos:

1. Crear una base de datos en PostgreSQL con el nombre comics-db.
2. Crear una tabla usando el query tool y ejecuntando el siguiente comando:
`CREATE TABLE comics (`
`id serial NOT NULL,`
`comic_name character varying(50) NOT NULL,`
`PRIMARY KEY (id)`
`);`
3. Una vez creada la base de datos y la tabla con su respectivo id y comic_name, clonar el repositorio.
4. En server/database/index.js cambiar usuario de Postgresql.
5. Ejecutar el comando `npm run dev`, que ejecutará concurrentemente el Front-end y Back-end dela aplicación.

