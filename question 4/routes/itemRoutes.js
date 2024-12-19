const express = require('express');
const {
    getAllItems,
    getItemById,
    createItem,
    updateItem,
    deleteItem,
} = require('../controllers/itemControllers');

const router = express.Router();

// Define CRUD routes
router.get('/', getAllItems); // GET /api/items
router.get('/:id', getItemById); // GET /api/items/:id
router.post('/', createItem); // POST /api/items
router.put('/:id', updateItem); // PUT /api/items/:id
router.delete('/:id', deleteItem); // DELETE /api/items/:id

module.exports = router;
