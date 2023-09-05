
let posts = [];

export async function savePosts(req, res) {
    const body = req.body;
    posts.push(body);
    res.send(body);
} 

export async function getAllPosts(req, res){
    res.json(posts);
}

export async function getPostById(req, res){
    console.log(req.params.id)
    const post = posts.find((post) => post.id === req.params.id);
    if (post) {
        res.json(post)
    } else {
        res.status(404).json({ message: "this id not found" })
    }
}

export async function deletePostById(req, res){
    console.log(req.params.id);
    const post = posts.findIndex((post) => post.id === req.params.id)
    if (post !== -1) {
        const deletePost = posts.splice(post, 1);
        res.json({ masseage: "this student was deleted" })
    } else {
        res.status(404).json({ message: "this id not found" })
    }

}

export async function updatePostById(req, res)  {
    const postId = req.params.id;
    const updatedPost = req.body;
    const index = posts.findIndex((post) => post.id === req.params.id);
    console.log(index)

    if (index !== -1) {
        posts[index] = updatedPost;
        res.json(posts[index]);
    } else {
        res.status(404).json({ message: "this posts not found" })
    }

}
