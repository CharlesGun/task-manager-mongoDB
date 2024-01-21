const User = require("../models/users");

module.exports = {
    create: async (req, res, next) => {
        try {
            const newUser = await User.create(req.body);
            if (!newUser) {
                return res.status(400).json({
                    status: false,
                    message: 'Failed to add data',
                });
            }
            return res.status(200).json({
                status: true,
                message: 'Data added successfully',
            });
        } catch (error) {
            next(error);
        }
    },

    findAll: async (req, res, next) => {
        try {
            const users = await User.find();
            if (!users) {
                return res.status(400).json({
                    status: false,
                    message: 'Failed to get data',
                });
            }
            res.status(200).json({
                status: true,
                message: 'Data retrieved successfully',
                data: users,
            });
        } catch (error) {
            next(error);
        }
    },

    findOne: async (req, res, next) => {
        const {
            id
        } = req.params;
        try {
            const user = await User.findById(id);
            if (!user) {
                return res.status(400).json({
                    status: false,
                    message: 'Failed to get data',
                });
            }
            res.status(200).json({
                status: true,
                message: 'Data retrieved successfully',
                data: user,
            });
        } catch (error) {
            next(error);
        }
    },

    update: async (req, res, next) => {
        const {
            id
        } = req.params;
        try {
            const option = {
                returnDocument: 'after'
            }
            const user = await User.findByIdAndUpdate(id, req.body, option);
            if (!user) {
                return res.status(400).json({
                    status: false,
                    message: 'Failed to get data',
                });
            }

            res.status(200).json({
                status: true,
                message: 'Data updated successfully',
                data: user
            });
        } catch (error) {
            next(error);
        }
    },

    delete: async (req, res, next) => {
        const {
            id
        } = req.params;
        try {
            const user = await User.findByIdAndDelete(id);
            if (!user) {
                return res.status(400).json({
                    status: false,
                    message: 'Failed to get data',
                });
            }
            res.status(200).json({
                status: true,
                message: 'Data deleted successfully',
            });
        } catch (error) {
            next(error);
        }
    }

}