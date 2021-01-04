const express = require('express');
const asyncHandler = require('express-async-handler');
const { ProjectTeam } = require('../../db/models');
const router = express.Router();

router.get('/:id', asyncHandler(async function (req, res) {
    const userId = req.params.id;
    // if (!req.user) {
    //     console.log("Hey jd")
    //     res.json([])
    //     return
    // }
    // const userId = req.user.id;
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
        const { name, userId, projectId, ownerId } = req.body;
        const projectTeam = await ProjectTeam.create({
            name,
            userId,
            projectId
        });
        const projectTeam2 = await ProjectTeam.create({ userId: ownerId, name, projectId })

        res.json(projectTeam, projectTeam2);
    })
);

module.exports = router