const exprees = require("express");
const app = exprees();
let posts = require("./db/posts.json");
const morgan = require("morgan");

app.use(morgan("combined"));

// fugnsi untuk membacafile json
app.use(exprees.json());
app.use(exprees.urlencoded({ extended: false }));

// Fugnsi untuk menambahkan data
app.post("/api/v1/posts", (req, res) => {
  const { name, body } = req.body;
  const id = posts[posts.length - 1].id + 1;
  const post = { id, name, body };

  posts.push(post);

  res.status(201).json(post);
});
// Fungsi Untuk mengupdate
app.put("/api/v1/posts/:id", (req, res) => {
  let post = posts.find((i) => i.id == req.params.id);
  const params = { name: req.body.name, body: req.body.body };
  post = { ...post, ...params };
  posts = posts.map((i) => (i.id == post.id ? post : i));
  res.status(200).json(post);
});
// Fungsi untuk menghapus
app.delete("/api/v1/posts/:id", (req, res) => {
  posts = posts.filter((i) => i.id != req.params.id);
  res.status(200).json({
    message: `Post dengan id ${req.body.id} sudah berhasil di hapus`,
  });
});

app.get("/api/v1/posts/:id", (req, res) => {
  const post = posts.find((i) => i.id == req.params.id);
  res.status(200).json(post);
});

// Menampilkan Semua isi Json
app.get("/api/v1/posts", (req, res) => {
  res.status(200).json(posts);
});

// Untuk Menjalankan Server
app.listen(3000, () => {
  console.log("Server Active");
});
