const express = require('express');
const asyncHandler = require('express-async-handler');
const { ProjectTeam } = require('../../db/models');
const router = express.Router();

router.get('/', asyncHandler(async function (req, res) {
    // const userId = req.params.id;
    if (!req.user) {
        res.json([])
        return
    }
    const userId = req.user.id;
    const projectTeams = await ProjectTeam.findAll(
        {
            where: {
                userId,

            },
            // include: [ProjectTeam]
        }
    );
    res.json(projectTeams);

}));

router.post(
    '/',
    asyncHandler(async function (req, res) {
        const { name, userId, projectId } = req.body;


        const projectTeam = await ProjectTeam.create({
            name,
            userId,
            projectId
        });

        res.json(projectTeam);
    })
);

module.exports = router