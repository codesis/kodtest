Visitkort = require('../model/visitkortModel')

exports.index = function (req, res) {
    Visitkort.get(function (err, visitkort) {
        if (err)
            res.json({
                status: 'An error occurred',
                message: err
            })
        res.json({
            status: '200 OK',
            message: 'All visitkort successfully fetched',
            data: visitkort
        })
    })
}

exports.add = function (req, res) {
    let visitkort = new Visitkort()
    visitkort.name = req.body.name ? req.body.name : visitkort.name
    visitkort.surname = req.body.surname
    visitkort.telephone = req.body.telephone
    visitkort.email = req.body.email
    visitkort.image = req.body.image

    visitkort.save(function (err) {
        if (err)
            res.json(err)
        
        res.json({
            message: 'New Visitkort added!',
            data: visitkort
        })
    })
}

exports.view = function (req, res) {
    Visitkort.findById(req.params.visitkort_id, function (err, visitkort) {
        if (err)
            res.send(err)
        res.json({
            status: '200 OK',
            message: 'Visitkort fetched Successfully',
            data: visitkort
        })
    })
}

exports.update = function (req, res) {
    Visitkort.findById(req.params.visitkort_id, function (err, visitkort) {
        if (err)
            res.send(err)
        
        visitkort.name = req.body.name ? req.body.name : visitkort.name
        visitkort.surname = req.body.surname
        visitkort.telephone = req.body.telephone
        visitkort.email = req.body.email
        visitkort.image = req.body.image

        visitkort.save(function (err) {
            if (err)
                res.json(err)
            res.json({
                message: 'Visitkort successfully Updated!',
                data: visitkort
            })
        })
    })
}

exports.delete = function (req, res) {
    Visitkort.deleteOne({
        _id: req.params.visitkort_id
    }, function (err, contact) {
            if (err)
                res.send(err)
            res.json({
                status: '200 OK',
                message: 'Visitkort successfully Deleted!'
            })
    })
}
