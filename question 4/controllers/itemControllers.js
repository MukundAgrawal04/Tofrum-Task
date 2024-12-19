const Item = require('../models/itemModel');

// Get all items
const getAllItems = async (req, res) => {
    try {
        const items = await Item.find();
        res.status(200).json(items);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get a single item by ID
const getItemById = async (req, res) => {
    try {
        const item = await Item.findById(req.params.id);
        if (!item) {
            return res.status(404).json({ message: 'Item not found' });
        }
        res.status(200).json(item);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Create a new item
const createItem = async (req, res) => {
    const { name, description, price } = req.body;
    try {
        const newItem = await Item.create({ name, description, price });
        res.status(201).json(newItem);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Update an item by ID
const updateItem = async (req, res) => {
    try {
        const updatedItem = await Item.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );
        if (!updatedItem) {
            return res.status(404).json({ message: 'Item not found' });
        }
        res.status(200).json(updatedItem);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Delete an item by ID
const deleteItem = async (req, res) => {
    try {
        const deletedItem = await Item.findByIdAndDelete(req.params.id);
        if (!deletedItem) {
            return res.status(404).json({ message: 'Item not found' });
        }
        res.status(200).json({ message: 'Item deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = {
    getAllItems,
    getItemById,
    createItem,
    updateItem,
    deleteItem,
};
