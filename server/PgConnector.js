'use strict';

const { Pool } = require('pg');

// Create a new pool instance
const pool = new Pool({
  user: 'postgres',
  host: '0.0.0.0',
  database: 'hackDb',
  password: 'dovigi',
  port: 5432 
});

// Define the function call
const functionName = 'insert_product';
const functionArguments = ['makat', 'readerLocation' , 'type', 'color', 'size', 'price', 'timestamp', 'snif']; // Pass any arguments required by the function

// Execute the function call
pool.query(`SELECT ${functionName}($1, $2, $3, $4, $5, $6, $7, $8)`, functionArguments, (error, results) => {
  if (error) {
    console.error('Error executing function:', error);
    return;
  }

  console.log('Function result:', results.rows);
  return results;
});

// Close the database connection
pool.end();