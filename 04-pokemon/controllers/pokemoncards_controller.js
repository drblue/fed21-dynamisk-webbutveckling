
const PokemonCards = require('../models/PokemonCards');
//const modules = require('../models');

const read = async(req, res) => {
    try {

        let card;
        if (req.params.id) {
            card = await PokemonCards.where({ "id" : req.params.id }).fetch( { require: false });
        } else {
            card = await PokemonCards.fetchAll();
        }

        if(!card) {
            return res.status(400).send({
                success: false, 
                data: "Not found"
            });
        }
 
        return res.status(200).send({
            success: true, 
            data: {
                card
            }
        });
    } catch(err) {
        return res.status(500).send({
            success: false,
            data: err.message
        }
        );
    }
}

module.exports = {
    read
}