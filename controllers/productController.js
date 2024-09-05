// src/controllers/productController.js
const Product = require('../models/Product');

exports.createProduct = async (req, res) => {
  try {
    const { plu, name } = req.body;
    const product = await Product.createProduct(plu, name);
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ error: 'Ошибка при создании продукта' });
  }
};

// другие CRUD контроллеры...
