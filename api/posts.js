import { Router } from "express";
import { deletePostById, getAllPosts, getPostById, savePosts, updatePostById } from "./controller/postController.js";

const postRouter = Router();



postRouter
    .route("/")
    .get(getAllPosts)
    .post(savePosts)

postRouter
    .route("/:id")
    .get(getPostById)
    .delete(deletePostById)
    .put(updatePostById)


    export default postRouter;



