Visitkort = require('../model/visitkortModel')

exports.index = function (req, res) {
    Visitkort.find(function (err, visitkort) {
        if (err) {
            return res.json({
                status: 'An error occurred',
                message: err
            })
        }
        res.json({
            status: '200 OK',
            message: 'All visitkort successfully fetched',
            data: visitkort
        })
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
    Visitkort.findById(req.params.visitkort_id, function (err, visitkort) {
        if (err) {
            return res.send(err)
        }
        res.json({
            status: '200 OK',
            message: 'Visitkort fetched Successfully',
            data: visitkort
        })
    })
}

exports.update = function (req, res) {
    Visitkort.findById(req.params.visitkort_id, function (err, visitkort) {
        if (err) {
            return res.send(err)
        }
        
        visitkort.visitkort_name = req.body.visitkort_name
        visitkort.visitkort_surname = req.body.visitkort_surName
        visitkort.visitkort_telephone = req.body.visitkort_telephone
        visitkort.visitkort_email = req.body.visitkort_email
        visitkort.visitkort_image = req.body.visitkort_image

        visitkort.save(function (err) {
            if (err) {
                return res.json(err)
            }
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
