import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
// import Product from './models/product.models.js';
import productRoutes from './routes/product.route.js';

// Configure dotenv
dotenv.config();
const app = express();


//middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));


// Use process.env.PORT or a default port if not defined
const port = process.env.PORT || 3000;


//routes
app.use('/api/products', productRoutes)



app.get('/', (req,res) =>{
  res.send('Hello world!');
});

const url = 'mongodb://admin:password@localhost:27017?retryWrites=true&w=majority&ssl=false&tls=false';

mongoose.connect(url).then(()=>{
  console.log('Database connect successfully!');
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}).catch((err) =>{
  console.log('failed to connect',err);
});

