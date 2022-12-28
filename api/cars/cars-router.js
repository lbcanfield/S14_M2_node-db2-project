const express = require('express');
const router = express.Router();


router.get('/', (request, response, next) => {
     console.log('get cars endpoint')
})
router.get('/:id', (request, response, next) => {
     console.log('get specific car endpoint')
})
router.post('/', (request, response, next) => {
     console.log('post endpoint')
})
router.put('/', (request, response, next) => {
     console.log('update endpoint')
})
router.delete('/:id', (request, response, next) => {
     console.log('delete endpoint')
})


module.exports = router