const models = require('../models');
const authorsLog = require('../utils/winston.js')();
authorsLog.defaultMeta = { file: "author_controller" };

// CRUD - Create, Read, Update och Delete

authorsLog.info('Created author_controller logger');


/**
 * Create
 * curl -X POST http://localhost:3000/authors -H 'Content-Type: application/json' -d '{"name" : "Bobba Fett","hp" : 12}'
 */
const create = async(req, res) => {
    try {


        this.read(req, res);

        // if (req.is('json')) console.log('Is JSON');
        if(req.is('json')) authorsLog.debug('Create Author data is JSON');


        let author = await new models.Authors(req.body).save();
        authorsLog.verbose('Create Author succeded');
        return res.status(201).send({
            success: true,
            data: {
                author
            }
        })

    } catch (err) {
        authorsLog.error('Create Author failed: %s', err.message);
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
        let author;

        if (req.params.id) {
            author = await models.Authors.where( {"id" : req.params.id} ).fetch({ require: true, withRelated: ['titles']});
        } else {
            author = await models.Authors.fetchAll({ withRelated: ['titles']});
        }

        if(!author) {
            return res.sendStatus(404);
        }

        return res.status(201).send({
            success: true,
            data: {
                author
            }
        })

    } catch (err) {
        authorsLog.error('Read Author failed: %s', err.message);
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
        let author = await models.Titles.where( {"id" : req.params.id} ).fetch({ require: true });

        if(!author) {
            return res.sendStatus(404);
        }

        author = await author.set(req.body).save();

        return res.status(201).send({
            success: true,
            data: {
                author
            }
        })

    } catch (err) {
        authorsLog.error('Update Author failed: %s', err.message);
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
        let author = await models.Titles.where( {"id" : req.params.id} ).fetch({ require: true });

        if(!author) {
            return res.sendStatus(404);
        }

        author = await author.destroy();

        return res.status(201).send({
            success: true,
            data: {
                author
            }
        })

    } catch (err) {
        authorsLog.error('Destroy Author failed: %s', err.message);
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
