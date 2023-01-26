var router = require('express').Router()
  var perretes = require('./perretes')
  var gatetes=require('./gatetes')

  router.use('/perretes', perretes)
  router.use('/gatetes', gatetes)

  router.get('/', function (req, res) {
    res.status(200).json({ message: 'Estás conectado a nuestra API' })
  })

  module.exports = router