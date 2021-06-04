import express from "express";
import Post from "../Models/Post.js";

const router = express.Router();

// get all posts
router.get("/", async (req, res) => {
	try {
		const posts = await Post.find();
		res.send(posts);
	} catch (error) {
		res.json({ message: error });
	}
});

// get post by id
router.get("/:id", async (req, res) => {
	try {
		const post = await Post.findById(req.params.id);
		res.json(post);
	} catch (error) {
		res.json({ message: error });
	}
});

// add posts
router.post("/", async (req, res) => {
	const post = new Post({
		title: req.body.title,
		description: req.body.description,
		image: req.body.image,
		date: req.body.date,
	});

	try {
		const SavedPost = await post.save();
		res.json(SavedPost);
	} catch (error) {
		res.json({ message: error });
	}
});

// delete post
router.delete("/:id", async (req, res) => {
	try {
		const DeletedPost = await Post.remove({ _id: req.params.id });
		res.json(DeletedPost);
	} catch (error) {
		res.json({ message: error });
	}
});

// update title
router.patch("/:id", async (req, res) => {
	try {
		const UpdatedTitle = await Post.updateOne(
			{ _id: req.params.id },
			{ $set: { title: req.body.title } }
		);
		res.json(UpdatedTitle);
	} catch (error) {
		res.json({ message: error });
	}
});

// updated whole post
router.put("/:id", async (req, res) => {
	try {
		const WholeUpdatedPost = await Post.findOneAndUpdate(
			{ _id: req.params.id },
			{
				$set: {
					title: req.body.title,
					description: req.body.description,
					image: req.body.image,
				},
			}
		);
		res.json(WholeUpdatedPost);
	} catch (error) {
		res.json({ message: error });
	}
});

export default router;
