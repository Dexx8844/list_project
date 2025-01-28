const express = require('express');
const router = express.Router();
const {
    getnewList,
    getALLList,
    getOneList,
    updateList,
    deleteList,
} = require('../Controller/Maincontroller'); // Adjust path if necessary

// Routes for list management
router.post('/lists', getnewList);    // Create a new list
router.get('/lists', getALLList);     // Get all lists
router.get('/lists/:id', getOneList);  // Get a single list by ID
router.put('/lists/:id', updateList);  // Update a list by ID
router.delete('/lists/:id', deleteList); // Delete a list by ID

module.exports = router;

