const express = require('express');
const asyncHandler = require('express-async-handler');
const { Task } = require('../../db/models');
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const router = express.Router();

router.get('/:projectId/:userId', asyncHandler(async function (req, res) {
    const { projectId, userId } = req.params;
    const tasks = await Task.findAll(
        {
            where: {
                projectId,
                // userId,


            },
        }
    );
    res.json(tasks);
}));

router.post(
    '/',
    asyncHandler(async function (req, res) {
        const { name, completed, dueDate, priority, sectionId, projectId, userId } = req.body;

        const tasks = await Task.create({
            name,
            completed,
            priority,
            dueDate,
            projectId,
            sectionId: 1,
            userId
            // userId,
            // userId: req.session.auth.userId
        });
        res.json(tasks);
    })
);

module.exports = router