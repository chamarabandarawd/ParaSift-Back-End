import express, { json } from "express";
const app = express();

const PORT = 5000;
app.use(json());

let posts = [];

app.get("/posts", (req, res) => {
  res.json(posts);
})

app.post("/posts", (req, res) => {
  const body = req.body;
  posts.push(body);
  res.send(body);
})

app.get("/posts/:id", (req, res) => {
  console.log(req.params.id)
  const post = posts.find((post) => post.id === req.params.id);
  if (post) {
    res.json(post)
  } else {
    res.status(404).json({ message: "this id not found" })
  }
})

app.delete("/posts/:id", (req, res) => {
  console.log(req.params.id);
  const post = posts.findIndex((post) => post.id === req.params.id)
  if (post !== -1) {
    const deletePost = posts.splice(post, 1);
    res.json({ masseage: "this student was deleted" })
  } else {
    res.status(404).json({ message: "this id not found" })
  }

})

app.put("/posts/:id", (req, res) => {
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

})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})
