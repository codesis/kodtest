const router = require('express').Router()
const visitkortController = require('../../controller/visitkortController')

router.route('/')
    .get(function (req, res) {
        res.json({
            status: '200 OK',
            message: 'Entry point of application'
        })
    })

router.route('/visitkort')
    .get(visitkortController.index)
    .post(visitkortController.add)

router.route('/visitkort/:visitkort_id')
    .get(visitkortController.view)
    .patch(visitkortController.update)
    .put(visitkortController.update)
    .delete(visitkortController.delete)


module.exports = router
