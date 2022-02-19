const models = require('../models');
const titlesLog = require('../utils/winston.js')();
titlesLog.defaultMeta = { file: "titles_controller" };
titlesLog.info('Created titles_controller logger');
// CRUD - Create, Read, Update och Delete

/**
 * Create
 * curl -X POST http://localhost:3000/titles -H 'Content-Type: application/json' -d '{"winningPokemon" : 10,"loosingPokemon" : 12}'
 */
const create = async(req, res) => {
    try {

        let title = await new models.Titles(req.body).save();

        return res.status(201).send({
            success: true,
            data: {
                title
            }
        })

    } catch (err) {
        titlesLog.error('Read Titles failed: %s', err.message);
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
        let title;
        if (req.params.id) {
            title = await models.Titles.where( {"id" : req.params.id} ).fetch({ require: true });
        } else {
            title = await models.Titles.fetchAll();
        }

        if(!title) {
            return res.sendStatus(404);
        }

        return res.status(201).send({
            success: true,
            data: {
                title
            }
        })

    } catch (err) {
        titlesLog.error('Read Titles failed: %s', err.message);
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
        let title = await models.Titles.where( {"id" : req.params.id} ).fetch({ require: true });

        if(!title) {
            return res.sendStatus(404);
        }

        title = await title.set(req.body).save();

        return res.status(201).send({
            success: true,
            data: {
                title
            }
        })

    } catch (err) {
        titlesLog.error('Update Titles failed: %s', err.message);
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
        let title = await models.Titles.where( {"id" : req.params.id} ).fetch({ require: true });

        if(!title) {
            return res.sendStatus(404);
        }

        title = await title.destroy();

        return res.status(201).send({
            success: true,
            data: {
                title
            }
        })

    } catch (err) {
        titlesLog.error('Destroy Titles failed: %s', err.message);
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