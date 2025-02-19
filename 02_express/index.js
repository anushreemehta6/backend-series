import express from "express";

const app = express();
const port = 3000;
app.use(express.json());

let teadata = [];
let nextId = 1;
// main landing
app.get("/", (req, res) => {
  res.send("hello form anushree");
});
// add a new tea
app.post("/teas", (req, res) => {
  const { name, price } = req.body;
  const newTea = { id: nextId++, name, price };
  teadata.push(newTea);

  res.status(201).send(newTea);
});

// get a tea
app.get("/teas", (req, res) => {
  res.send(teadata);
});
// get a tea based on the id
app.get("/teas/:id", (req, res) => {
  const tea = teadata.find((t) => t.id === parseInt(req.params.id));

  if (!tea) {
    res.send("no tea present");
  } else {
    res.send(tea);
  }
});

// upadate a tea

app.put("/teas/:id", (req, res) => {
  const tea = teadata.find((t) => t.id === parseInt(req.params.id));
  const { name, price } = req.body;
  tea.name = name;
  tea.price = price;
  if (!tea) {
    res.send("404:not found").status(404);
  }
  res.send(tea).status(200);
});

// delete a tea
app.delete("/teas/:id", (req, res) => {
  const index = teadata.findIndex((t) => t.id === parseInt(req.params.id));
  if (!index) {
    res.status(404).send("404: tea not found");
  }
  teadata.splice(index,1);
  return res.send("deleted");
});
app.listen(port, () => {
  console.log(`server started at ${port}`);
});
