import * as express from 'express';
import * as mongodb from 'mongodb';
import database from '../db';
let router = express.Router();

router.post('/', (req, res) => {
  let movie = req.body;
  movie._id = new mongodb.ObjectID(req.body.id);
  database.db.collection('movies').save(req.body).then((newMovie) => {
    res.end();
  })
})

router.get('/', (req, res) => {
  database.db.collection('movies').find().toArray().then((movies)=>{
    res.json(movies);
  })
});

router.delete('/:id', (req, res) => {
  let movieId = new mongodb.ObjectID(req.params['id']);
  database.db.collection('movies').remove({_id: movieId}).then(() => {
    res.end();
  })
})

export default router;
