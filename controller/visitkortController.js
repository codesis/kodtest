Visitkort = require('../model/visitkortModel')

exports.index = function (req, res) {
    Visitkort.find(function (err, visitkort) {
        if (err) {
            return res.json({
                status: 'An error occurred',
                message: err
            })
        } else {
            res.json(visitkort)
        }
    })
}

exports.add = function (req, res) {
    let visitkort = new Visitkort(req.body)
    
    visitkort.save()
        .then(visitkort => {
        res.status(200).json({'visitkort':'visitkort successfully created'})
        })
        .catch(err => {
        res.status(400).send('creating a new visitkort has failed')
    })
}

exports.view = function (req, res) {
    Visitkort.findById(req.params.id, function (err, visitkort) {
        if (err) {
            return res.send(err)
        }
        res.json(visitkort)
    })
}

exports.update = function (req, res) {
    Visitkort.findById(req.params.id, function (err, visitkort) {
        if (err) {
            return res.send(err)
        }
        
        visitkort.name = req.body.name
        visitkort.surname = req.body.surname
        visitkort.telephone = req.body.telephone
        visitkort.email = req.body.email
        visitkort.image = req.body.image

        visitkort.save(function (err) {
            if (err) {
                return res.json(err)
            }
            res.json(visitkort)
        })
    })
}

exports.delete = function (req, res) {
    Visitkort.deleteOne({
        _id: req.params.id
    }, function (err) {
            if (err) {
                return res.send(err)
            }
            res.json({
                status: '200 OK',
                message: 'Visitkort successfully Deleted!'
            })
    })
}
