'use strict';
const express = require('express');
const router = express.Router();
const Author = require('../service/author');

router.get('/', async (req, res, next) => {
  try{
    let authors = await Author.all();
    res.status(200).json({'result': authors});
  } catch(e) {
    console.error(e);
    next(e);
  }
});

router.get('/name/:authorName', async (req, res, next) => {
  try{
    let authors = await Author.findBy(req.params.authorName);
    res.status(200).json({'result': authors});
  } catch(e) {
    console.error(e);
    next(e);
  }
});

router.get('/:id', async (req, res, next) => {
  try{
    let authors = await Author.findById(req.params.id);
    res.status(200).json({'result': authors});
  } catch(e) {
    console.error(e);
    next(e);
  }
});

router.post('/', async (req, res, next) => {
  try{
    await Author.create(req.body.name, req.body.email, req.body.birth);
    res.status(201).json({'result': 'ok'});
  } catch(e) {
    console.error(e);
    next(e);
  }
});

router.put('/', async (req, res, next) => {
  try{
    let author = await Author.update(req.body._id, req.body.name, req.body.email, req.body.birth);
    res.status(200).json({'result': author});
  } catch(e) {
    console.error(e);
    next(e);
  }
});

router.delete('/', async (req, res, next) => {
  try{
    let author = await Author.delete(req.body.id);
    res.status(200).json({'result': author});
  } catch(e) {
    console.error(e);
    next(e);
  }
});

module.exports = router;