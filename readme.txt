download postGreSql from https://www.postgresql.org/download/

install the exe file, while asking for password, set to "js4life"

download pgadmin from https://www.pgadmin.org/

install the exe file

open pgadmin, when asking for password, set to "js4life"

while connected to db with pgadmin, create a new database named "ofigatelier"

run in the console, "npm install" from the root directory

run in the console(linux only), psql -h localhost -d ofigatelier -U postgre 

run in the console(linux only), \i .\DB\create_db.sql

run in the console, "node --watch index.js" from the root directory
