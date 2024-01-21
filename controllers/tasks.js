const Task = require("../models/tasks");

module.exports = {
    create: async (req, res, next) => {
        try {
            const newTask = await Task.create(req.body);
            if (!newTask) {
                return res.status(400).json({
                    status: false,
                    message: 'Failed to add data',
                });
            }
            return res.status(200).json({
                status: true,
                message: 'Data added successfully',
                data: newTask
            });
        } catch (error) {
            next(error);
        }
    },

    findAll: async (req, res, next) => {
        try {
            const tasks = await Task.find();
            if (!tasks) {
                return res.status(400).json({
                    status: false,
                    message: 'Failed to get data',
                });
            }
            res.status(200).json({
                status: true,
                message: 'Data retrieved successfully',
                data: tasks,
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
            const task = await Task.findById(id);
            if (!task) {
                return res.status(400).json({
                    status: false,
                    message: 'Failed to get data',
                });
            }
            res.status(200).json({
                status: true,
                message: 'Data retrieved successfully',
                data: task,
            });
        } catch (error) {
            next(error);
        }
    },

    findByUserId: async (req, res, next) => {
        const {
            userId
        } = req.params;

        let {sort_by = "_id", order = "asc", filter_by, filter_value, page = 1, pageSize = 10} = req.query;
        try{
            page = parseInt(page);
            pageSize = parseInt(pageSize);

            let tasks;
            if(filter_by && filter_value){
                tasks = await Task.find({userId: userId,}).where(`${filter_by}`, filter_value).sort([[sort_by, order]]).skip((page-1)*pageSize).limit(pageSize);
            } else {
                tasks = await Task.find({userId: userId,}).sort([[sort_by, order]]).skip((page-1)*pageSize).limit(pageSize);
            }

            if(!tasks){
                return res.status(400).json({
                    status: false,
                    message: 'Failed to get data',
                });
            }
            res.status(200).json({
                status: true,
                message: 'Data retrieved successfully',
                data: {page, length: tasks.length, tasks},
            });

        } catch(error){
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
            const task = await Task.findByIdAndUpdate(id, req.body, option);
            if (!task) {
                return res.status(400).json({
                    status: false,
                    message: 'Failed to get data',
                });
            }

            res.status(200).json({
                status: true,
                message: 'Data updated successfully',
                data: task
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
            const task = await Task.findByIdAndDelete(id);
            if (!task) {
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