'use strict';

const express = require('express');
const router = express.Router();
const Publication = require('../service/publication');

router.get('/', async (req, res, next) => {
  try{
    let publications = await Publication.all();
    res.status(200).json({'result': publications});
  } catch(e) {
    console.error(e);
    next(e);
  }
});

router.get('/title/:title', async (req, res, next) => {
  const pagination = 3;
  try{
    let { offset, limit } = validatePagination(req, pagination);
    let publications = await Publication.findByTitle(req.params.title, pagination, offset, limit);
    res.status(200).json({'result': publications});
  } catch(e) {
    console.error(e);
    next(e);
  }
});

router.get('/:id', async (req, res, next) => {
  try{
    let publications = await Publication.findById(req.params.id);
    res.status(200).json({'result': publications});
  } catch(e) {
    console.error(e);
    next(e);
  }
});

router.get('/author/:authorId', async (req, res, next) => {
  try{
    let publications = await Publication.findByAuthorId(req.params.authorId);
    res.status(200).json({'result': publications});
  } catch(e) {
    console.error(e);
    next(e);
  }
});

router.post('/', async (req, res, next) => {
  try{
    await Publication.create(req.body.title, req.body.body, req.body.date, req.body.authorId);
    res.status(200).json({'result': 'ok'});
  } catch(e) {
    console.error(e);
    next(e);
  }
});

router.put('/', async (req, res, next) => {
  try{
    let result = await Publication.update(req.body.id, req.body.title, req.body.body, req.body.date, req.body.authorId);
    res.status(200).json({'result': result});
  } catch(e) {
    console.error(e);
    next(e);
  }
});

router.delete('/', async (req, res, next) => {
  try{
    let result = await Publication.delete(req.body.id);
    res.status(200).json({'result': result});
  } catch(e) {
    console.error(e);
    next(e);
  }
});

module.exports = router;

function validatePagination(req, pagination) {
  let offset = 0;
  let limit = pagination;
  if (req.query.offset && req.query.limit) {
    offset = Number(req.query.offset);
    limit = Number(req.query.limit);
  }
  return { offset, limit };
}
