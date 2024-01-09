const {Router} = require('express')
const { getToDo, saveToDo, deleteToDo, updateToDo } = require('../controllers/todocontroller')

const router = Router()

router.get('/', getToDo)
router.post('/save',saveToDo)

router.post('/delete', deleteToDo)
router.patch('/update', updateToDo)

module.exports = router