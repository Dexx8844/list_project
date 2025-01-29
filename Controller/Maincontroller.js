const List = require('../models/list'); // Import the List model

exports.getnewList = async (req, res) => {
    try {
        // Destructure the list properties from the request body
        const { AllList, description } = req.body;

        // Create a new list using the List model
        const newList = await List.create({
             AllList,       // Field name in the model
            //description // Field description in the model
        });

        // Respond with the success message and the created list
        res.status(201).json({
            message: "List created successfully",
            data: newList
        });
    } catch (error) {
        // Handle any errors during the process
        res.status(500).json({
            message: error.message
        });
    }
}


exports.getALLList = async (req, res) => {
    try {
        const AllList  = await List.findAll();
        res.status(200).json({
            message: 'All list retrieved from the database',
            data: AllList
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

exports.getOneList = async (req, res) => {
    try {
        const { id } = req.params;

        // Find the list by ID
        const foundList = await List.findOne({
            where: { id: id }
        });

        if (!foundList) {
            return res.status(404).json({
                message: 'List not found'
            });
        } else {
            return res.status(200).json({
                message: 'List found',
                data: foundList
            });
        }
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
};

// Update a list by ID
exports.updateList = async (req, res) => {
    try {
        const { id } = req.params;
        const { list: updatedList } = req.body;

        const foundList = await List.findOne({
            where: { id },
        });

        if (!foundList) {
            return res.status(404).json({
                message: "List not found",
            });
        }

        // Update the list
        await List.update(
            { List: updatedList },
            { where: { id } }
        );

        res.status(200).json({
            message: "List updated successfully",
            data: { id, List: updatedList },
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

// Delete a list by ID
exports.deleteList = async (req, res) => {
    try {
        const { id } = req.params;

        const foundList = await List.findOne({
            where: { id },
        });

        if (!foundList) {
            return res.status(404).json({
                message: "List not found",
            });
        }

        // Delete the list
        await List.destroy({
            where: { id },
        });

        res.status(200).json({
            message: "List deleted successfully",
            data: { id },
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};
