// src/models/Product.js
const pool = require('../database/db');

const createProduct = async (plu, name) => {
  const query = 'INSERT INTO products (plu, name) VALUES ($1, $2) RETURNING *';
  const result = await pool.query(query, [plu, name]);
  return result.rows[0];
};

// другие CRUD операции...
module.exports = { createProduct };
