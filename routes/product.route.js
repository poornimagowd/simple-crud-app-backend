import express from 'express';
import {
    getProducts,
    getProductsById,
    createProducts,
    updateProducts,
    deleteProducts
} from '../controller/product.controller.js';
const router = express.Router();


router.get('/', getProducts);
  
router.get('/:id', getProductsById);
  
router.post('/', createProducts);
  
router.put('/:id', updateProducts);
  
  
router.delete('/:id', deleteProducts);


export default router;