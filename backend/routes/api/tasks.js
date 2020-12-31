const express = require('express');
const asyncHandler = require('express-async-handler');
const { Task } = require('../../db/models');
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const router = express.Router();

router.get('/:id', asyncHandler(async function (req, res) {
    const userId = req.params.id;
    const tasks = await Task.findAll(
        {
            where: {
                userId,

            },
        }
    );
    res.json(tasks);
}));

router.post(
    '/',
    asyncHandler(async function (req, res) {
        const { name, completed, dueDate, priority } = req.body;
        const projectId = req.body.id;
        const tasks = await Task.create({
            name,
            completed,
            priority,
            dueDate,
            projectId,
            // userId,
            // userId: req.session.auth.userId
        });
        res.json(tasks);
    })
);

module.exports = router