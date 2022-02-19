module.exports = (controller) => {
    const express = require('express');
    const router = express.Router();

      /* Get all Titles */
     router.get('/', controller.read);
     
     /* Get a Titles */
     router.get('/:id', controller.read);
     
     /* Create a new Titles */
     router.post('/', controller.create);
     
     /* Update a Titles */
     router.put('/:id', controller.update);
     
     /* Delete a Titles */
     router.delete('/:id', controller.destroy);   

    return router;
} ;