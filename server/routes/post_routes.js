const express = require("express");
const router = express.Router();
const passport = require('passport');

const auth = passport.authenticate('jwt', { session: false });

const postController = require("../posts/posts.controller");

// create post for current location
router.post('/', postController.add);
// get all posts of current location
router.get('/', postController.get);
// get all posts of current location
router.get('/:id', postController.getById);
// remove posts
router.delete('/:id', postController.removeById);
// like post
router.post('/like/:id', postController.like);
// unlike post
router.post('/unlike/:id', postController.unlike);
// add comment to post
router.post('/comment/:id', postController.comment);
// remove comment from post
router.delete('/comment/:id/:comment_id', postController.uncomment);

module.exports = router;