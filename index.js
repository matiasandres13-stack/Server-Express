import express from "express";
const app = express();
const PORT = 3000;
const productos = [
  { id: 1, nombre: "producto 1", precio: 100 },
  { id: 2, nombre: "producto 2", precio: 200 },
];

/* app.use((req, res, next) => {
  console.log(`${req - method} ${req - url}`);
  next();
}); */

app.get("/", (req, res) => {
  res.send("Hola, mundo desde Express!");
});

app.get("/productos", (req, res) => {
  res.json(productos);
});

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
