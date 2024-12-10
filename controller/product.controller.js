import Product from '../models/product.models.js';

export const getProducts = async(req,res) =>{
    try {
        const products = await Product.find({});
        res.status(200).json(products);
    } catch(error) {
        res.status(500).json({msg: error.message});
    }
}


export const getProductsById = async(req,res) => {
    try {
        const { id } = req.params;
        const products = await Product.findById(id);
        res.status(200).json(products);
    } catch(error) {
        res.status(500).json({msg: error.message});
    }
}


export const createProducts = async(req,res) =>{
    try {
      const product = await Product.create(req.body);
      res.status(200).json(product);
    } catch(error) {
      res.status(500).json({msg: error.message});
    }
}


export const updateProducts = async(req,res) =>{
    try {
      const { id } = req.params;
      const product = await Product.findByIdAndUpdate(id);
      if(!product) {
        res.status(404).json({msg: 'not found'});
      }
      const updatedProduct = await Product.findById(id);
      res.status(200).json(updatedProduct);
    } catch(error) {
      res.status(500).json({msg: error.message});
    }
}


export const deleteProducts = async(req,res) =>{
    try {
      const { id } = req.params;
      const product = await Product.findByIdAndDelete(id);
      if(!product) {
        res.status(404).json({msg: 'not found'});
      }
      res.status(200).json({msg: 'deleted'});
    } catch(error) {
      res.status(500).json({msg: error.message});
    }
}
