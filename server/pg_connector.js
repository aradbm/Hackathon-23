'use strict';

const { Pool } = require('pg');

// Create a new pool instance
const pool = new Pool({
  user: 'postgres',
  host: '0.0.0.0',
  database: 'hackdb',
  password: 'dovigi',
  port: 5432
});

const connector = module.exports = {}

connector.insert_product = (obj) => {
  return new Promise((resolve, reject) => {
    let functionArguments = [obj.makat, obj.product_type, obj.price, obj.color, obj.product_size, obj.scan_date, obj.scan_location, obj.snif]
    pool.query(`SELECT insert_product($1, $2, $3, $4, $5, $6, $7, $8)`, functionArguments, (err, result) => {
      if (err) {
        resolve({ data: null, err: err })
        return
      }

      resolve({ data: result.rows, err: null })
    })
  })
}