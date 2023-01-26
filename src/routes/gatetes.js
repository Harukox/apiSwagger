var router = require('express').Router()
const gatetes = new Map();

gatetes.set("1", "Coco");
gatetes.set("2", "Horatio");


router.get('/:id', function(req, res) {
var nombre = gatetes.get(req.params.id);

if (nombre==null)
{ res.json({ message: "No existe el gatete con id " + req.params.id + ' adopta un gatete'});
}
  else {res.json({ name: nombre })
}})

router.get('/', function(req, res) {
    array = Array.from(gatetes, ([id, name]) => ({ id, name }));
    console.log(array);
    res.json(array)
})

router.post('/', function(req, res) {
  res.json({ message: 'Vas a añadir un gatete' })
})

router.put('/:id', function(req, res) {
  res.json({ message: 'Vas a actualizar el gatete con id ' + req.params.id })
})

router.delete('/:id', function(req, res) {
  res.json({ message: 'Vas a borrar el gatete con id ' + req.params.id})
})


module.exports = router