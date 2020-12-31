// const express = require('express');
// const asyncHandler = require('express-async-handler');
// const { ProjectTeam } = require('../../db/models');

// const router = express.Router();

// router.get('/:id', asyncHandler(async function (req, res) {
//     const userId = req.params.id;
//     const projectTeam = await ProjectTeam.findAll(
//         {
//             where: {
//                 userId,

//             },
//             include: [ProjectTeam]
//         }
//     );
//     res.json(projectTeam);
// }));

// router.post(
//     '/',
//     asyncHandler(async function (req, res) {
//         const { name, userId } = req.body;

//         const projectTeam = await ProjectTeam.create({
//             name,
//             completed,
//             priority,
//             dueDate
//             // userId,
//             // userId: req.session.auth.userId
//         });
//         res.json(projectTeam);
//     })
// );

// module.exports = router