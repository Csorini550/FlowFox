const express = require('express');
const asyncHandler = require('express-async-handler');
const { Task } = require('../../db/models');

const router = express.Router();

router.get('/:id', asyncHandler(async function (req, res) {
    const userId = req.params.id;
    const tasks = await Task.findAll(
        {
            where: {
                userId,

            },
            include: [Task]
        }
    );
    res.json(tasks);
}));

router.post(
    '/',
    asyncHandler(async function (req, res) {
        const { name, userId } = req.body;

        const tasks = await Task.create({
            name,
            // userId,
            // userId: req.session.auth.userId
        });
        res.json(tasks);
    })
);

module.exports = router