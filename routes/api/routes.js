const router = require('express').Router()
const visitkortController = require('../../controller/visitkortController')

router.route('/')
    .get(visitkortController.index)


router.route('/create')
    .post(visitkortController.add)


router.route('/:id')
    .get(visitkortController.view)
    .patch(visitkortController.update)
    .put(visitkortController.update)
    .delete(visitkortController.delete)


module.exports = router
