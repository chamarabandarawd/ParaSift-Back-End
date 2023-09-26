import { Router } from "express";
import { deletePostById, getAllPosts, getPostById, savePosts, updatePostById, generateSummary, deleteAllPost } from "../controller/summaryController.js";

const postRouter = Router();



postRouter
    .route("/")
    .get(getAllPosts)
    .post(savePosts)
    .delete(deleteAllPost)

postRouter.route("/generate").post(generateSummary);

postRouter
    .route("/:id")
    .get(getPostById)
    .delete(deletePostById)
    .put(updatePostById)


export default postRouter;



