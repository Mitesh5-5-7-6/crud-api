const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();
app.use(cors());
app.use(express.json());

const FILE = "./users.json";

// read data
const getUsers = () => {
  const data = fs.readFileSync(FILE);
  return JSON.parse(data);
};

// write data
const saveUsers = (data) => {
  fs.writeFileSync(FILE, JSON.stringify(data, null, 2));
};

// GET
app.get("/users", (req, res) => {
  res.json(getUsers());
});

// POST
app.post("/users", (req, res) => {
  const users = getUsers();
  const newUser = { id: Date.now(), ...req.body };

  users.push(newUser);
  saveUsers(users);

  res.json(newUser);
});

// PATCH
app.patch("/users/:id", (req, res) => {
  let users = getUsers();
  const id = parseInt(req.params.id);

  users = users.map((u) => (u.id === id ? { ...u, ...req.body } : u));
  saveUsers(users);

  res.json({ message: "Updated" });
});

// DELETE
app.delete("/users/:id", (req, res) => {
  let users = getUsers();
  const id = parseInt(req.params.id);

  users = users.filter((u) => u.id !== id);
  saveUsers(users);

  res.json({ message: "Deleted" });
});

app.listen(3000, () => console.log("Server running"));
