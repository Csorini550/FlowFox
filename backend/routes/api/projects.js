const express = require('express');
const { check } = require('express-validator');
const asyncHandler = require('express-async-handler');

const { handleValidationErrors } = require('../../utils/validation');
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { Project, ProjectTeam, Task } = require('../../db/models');


const router = express.Router();

router.get('/:id', asyncHandler(async function (req, res) {
    const projectId = req.params.id;
    const projects = await ProjectTeam.findByPk(
        projectId,
        {
            include: [Project]
            // include: [{ model: Project, include: [Task]}]
        }
    );
    res.json({ name: projects.Project.name, id: projectId });
}));

router.get('/user/:id', asyncHandler(async function (req, res) {
    const userId = req.params.id;
    const projects = await ProjectTeam.findAll(
        {
            where: {
                userId,

            },
            include: [Project]
        }
    );
    res.json(projects);
}));

router.post(
    '/',
    asyncHandler(async function (req, res) {
        const { name, userId } = req.body;

        const project = await Project.create({
            name,
            // userId,
            // userId: req.session.auth.userId
        });
        const projectTeam = await ProjectTeam.create({
            userId,
            projectId: project.id
        })
        res.json(project);
    })
);

module.exports = router