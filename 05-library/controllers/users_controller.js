const models = require('../models');

// CRUD - Create, Read, Update och Delete

/**
 * Create
 * curl -X POST http://localhost:3000/users -H 'Content-Type: application/json' -d 
 */
const create = async(req, res) => {
    try {

        let user = await new models.Users(req.body).save();

        return res.status(201).send({
            success: true,
            data: {
                user
            }
        })

    } catch (err) {
        return res.status(500).send({
            success: false,
            data: err.message     
        });
    }
}

/*
* Read
*/
const read = async(req, res) => {
    try {
        let user;
        if (req.params.id) {
            user = await models.Users.where( {"id" : req.params.id} ).fetch({ require: true, withRelated: ['reservations'] });
        } else {
            user = await models.Users.fetchAll({ withRelated: ['reservations'] });
        }

        if(!user) {
            return res.sendStatus(404);
        }

        return res.status(201).send({
            success: true,
            data: {
                user
            }
        })

    } catch (err) {
        return res.status(500).send({
            success: false,
            data: err.message     
        });       
    }
}

/*
 * Update 
 */
const update = async(req, res) => {
    try {
        let user = await models.Users.where( {"id" : req.params.id} ).fetch({ require: true });

        if(!user) {
            return res.sendStatus(404);
        }

        user = await user.set(req.body).save();

        return res.status(201).send({
            success: true,
            data: {
                user
            }
        })

    } catch (err) {
        return res.status(500).send({
            success: false,
            data: err.message     
        });       
    }
}

/*
 * Delete
 */
const destroy = async(req, res) => {
    try {
        let user = await models.Users.where( {"id" : req.params.id} ).fetch({ require: true });

        if(!user) {
            return res.sendStatus(404);
        }

        user = await user.destroy();

        return res.status(201).send({
            success: true,
            data: {
                user
            }
        })

    } catch (err) {
        return res.status(500).send({
            success: false,
            data: err.message     
        });       
    }
}


module.exports = {
    create,
    read,
    update,
    destroy
}