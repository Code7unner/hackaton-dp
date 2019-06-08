const express = require('express'),
	app = express()

const db = require('../_helpers/db'),
	User = db.User,
	Post = db.Post

function add(req, res) {
	new Post({
		text: req.body.text,
		name: req.body.name,
		user: req.body.id
	})
		.save()
		.then(result => res.json(result))
		.catch(err => res.json(err))
}

function get(req, res) {
	Post.find()
		.sort({date: -1})
		.then(result => res.json(result))
		.catch(err => res.status(404).json(err))
}

function getById(req, res) {
	Post.findById(req.params.id)
		.then(result => res.json(result))
		.catch(err => res.status(404).json(err))
}

function like(req, res) {
	User.findOne({user: req.user.id})
		.then(user => {
			Post.findById(req.params.id)
				.then(post => {
					if (post.likes.filter(like => like.user.toString() === req.user.id).length > 0) {
                        return res.status(404).json('User already liked this post');
                    }

                    post.likes.unshift({user: req.user.id});

                    post
                    	.save()
                    	.then(result => res.json(result))
				})
				.catch(err => res.json(err))
		})
}

function unlike(req, res) {
    User.findOne({ user: req.user.id })
        .then(user => {
            Post.findById(req.params.id)
                .then(post => {
                    if (post.likes.filter(like => like.user.toString() === req.user.id).length === 0) {
                        return res.status(404).json('You have not yet liked this post');
                    }

                    const removeIndex = post.likes
                        .map(item => item.user.toString())
                        .indexOf(req.user.id);

                    post.likes.splice(removeIndex, 1);

                    post
                        .save()
                        .then(result => res.json(result));
                })
                .catch(err => res.status(404).json('No post found'));
        })
}

function comment(req, res) {
	const newComment = {
        text: req.body.text,
        name: req.body.name,
        user: req.body.id
	}

	Post.findById(req.params.id)
		.then(post => {
			post.comments.unshift(newComment);

			post
				.save()
				.then(result => res.json(result))
		})
		.catch(err => res.status(404).json('No post found'))
}

function uncomment(req, res) {
	Post.findById(req.params.id)
        .then(post => {
            if (post.comments.filter(comment => comment._id.toString() === req.params.comment_id).length === 0) {
                return res.status(404).json('Comment does not exists');
            }

            const removeIndex = post.comments
                .map(item => item._id.toString())
                .indexOf(req.params.comment_id);

            post.comments.splice(removeIndex, 1);

            post
                .save()
                .then(post => res.json(post));
        })
        .catch(err => res.status(404).json('No post found'));
}

function removeById(req, res) {
	User.findOne({ user: req.user.id })
        .then(user => {
            Post.findById(req.params.id)
                .then(post => {
                    if (post.user.toString() !== req.user.id) {
                        return res.status(401).json('User is not authorized');
                    }

                    post
                        .remove()
                        .then(() => res.json({ success: true }));
                })
                .catch(err => res.status(404).json('No post found'));
        })
}

//Exporting all the functions
module.exports = {
	add,
	removeById,
	get,
	getById,
	like,
	unlike,
	comment,
	uncomment
};