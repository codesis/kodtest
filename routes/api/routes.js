const router = require('express').Router()

router.route('/')
    .get(function (req, res) {
        res.json({
            status: '200 OK',
            message: 'Entry point of application'
        })
    })

router.route('/visitkort')
.get(function (req, res) {
    Visitkort.find(function(err, docs) {
        if (err) {
            console.log(err)
        } else {
            res.json(docs)
        }
    })
})

router.post('/api/create', (req, res) => {
    let visitkort = new Visitkort(req.body)
    visitkort.save((err, data) => {
        if (err) {
            res.send(err)
        } else {
            res.send(data)
        }
    })
})

router.put('/api/:id')
