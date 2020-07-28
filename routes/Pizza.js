const express = require('express')
const PizzaRouter = express.Router()

const {index, create, update, destroy} = require('../controllers/Pizza');

PizzaRouter.get('/', index);

PizzaRouter.post('/', create)

PizzaRouter.put('/:id', update)

PizzaRouter.delete('/:id', destroy)

module.exports = PizzaRouter