const express = require('express');
const { check } = require('express-validator');
const asyncHandler = require('express-async-handler');

const { handleValidationErrors } = require('../../utils/validation');
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User } = require('../../db/models');

const router = express.Router();

const validateSignup = [
  check('email')
    .exists({ checkFalsy: true })
    .isEmail()
    .withMessage('Please provide a valid email.'),
  check('username')
    .exists({ checkFalsy: true })
    .isLength({ min: 4 })
    .withMessage('Please provide a username with at least 4 characters.'),
  check('username').not().isEmail().withMessage('Username cannot be an email.'),
  check('password')
    .exists({ checkFalsy: true })
    .isLength({ min: 6 })
    .withMessage('Password must be 6 characters or more.'),
  handleValidationErrors
];

// Sign up
router.post(
  '/',
  validateSignup,
  asyncHandler(async (req, res) => {
    const { email, password, username, firstName, lastName } = req.body;
    const user = await User.signup({ email, username, password, firstName, lastName });

    await setTokenCookie(res, user);

    return res.json({
      user
    });
  })
);



router.get('/all', asyncHandler(async function (req, res) {
  // const userId = req.params.id;
  // if (!req.user) {
  //   res.json([])
  //   return
  // }
  // const userId = req.user.id;
  const users = await User.findAll();
  res.json(users);

}));

// router.post(
//   '/',
//   asyncHandler(async function (req, res) {
//     const { name, userId, projectId } = req.body;


//     const projectTeam = await ProjectTeam.create({
//       name,
//       userId,
//       projectId
//     });

//     res.json(projectTeam);
//   })
// );


module.exports = router;
