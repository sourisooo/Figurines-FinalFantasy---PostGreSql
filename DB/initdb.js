const { Client } = require("pg");
const fs = require('fs');

async function initdb() {

const client = new Client('postgresql://postgres:random@localhost/ofigatelier');

await client.connect();

const sqlFileContent = fs.readFileSync('./create_db.sql', 'utf8');
const result = await client.query(sqlFileContent)

// const result = await client.query('RELOAD;');

await client.end();

console.log(result);

;}

console.log("read done");
initdb();


