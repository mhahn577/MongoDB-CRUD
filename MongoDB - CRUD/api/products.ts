import * as express from 'express';
import database from '../db';
import * as mongodb from 'mongodb';

let router = express.Router();

// GET single product
router.get('/:id', (req, res) => {
  let productId = new mongodb.ObjectID(req.params['id']);
  console.log('product ID is: ', this.productID);
  database.db.collection('products').findOne(productId).then((product)=> {
    res.json(product);
  });
});

// GET products
router.get('/', (req, res) => {
  database.db.collection('products').find().toArray().then((products)=>{
    res.json(products);
  })
});

// Create/Update product
router.post('/', (req, res) => {
  let product = req.body;
  product._id = new mongodb.ObjectID(product._id); // convert _id to object
  database.db.collection('products').save(product).then((newProduct) => {
    res.json(newProduct);
  })
});

// Delete product
router.delete('/:id', (req, res) => {
  let productId = new mongodb.ObjectID(req.params['id']);
  database.db.collection('products').remove({_id:productId}).then(()=> {
    res.sendStatus(200);
  });

});

export default router;
