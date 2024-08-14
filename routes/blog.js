const express = require("express");
const router = express.Router();

// Import Controller
const { createComment } = require("../controllers/commentController");
const { createPost, getAllPosts } = require("../controllers/postController");
const {  unlikePost } = require("../controllers/likeController");
const { dummyLink, likePost } = require("../controllers/likeController");

// Mapping Create
router.post("/comments/create", createComment);
router.post("/posts/create", createPost);
router.get("/posts", getAllPosts);
router.post("/likes/like", likePost);
router.get("/dummyroute", dummyLink);
router.post("/likes/unlike", unlikePost);





// Export Controller
module.exports = router;
