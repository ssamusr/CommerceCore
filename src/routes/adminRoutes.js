const router = require("express").Router();

// Products
router.get("/products", (req, res) => {
  res.send("Get all products");
});
router.get("/products/:id", (req, res) => {
  res.send("Get product by id");
});
router.post("/products", (req, res) => {
  res.send("Create product");
});
router.put("/products/:id", (req, res) => {
  res.send("Update product");
});
router.delete("/products/:id", (req, res) => {
  res.send("Delete product");
});

// Categories

router.get("/categories", (req, res) => {
  res.send("Get all categories");
});
router.post("/categories", (req, res) => {
  res.send("Create category");
});
router.put("/categories/:id", (req, res) => {
  res.send("Update category");
});
router.delete("/categories/:id", (req, res) => {
  res.send("Delete category");
});

// Orders

router.get("/orders", (req, res) => {
  res.send("Get all orders");
});
router.get("/orders/:id", (req, res) => {
  res.send("Get order by id");
});
router.put("/orders/:id", (req, res) => {
  res.send("Update order");
});
router.delete("/orders/:id", (req, res) => {
  res.send("Delete order");
});

// Users

router.get("/users", (req, res) => {
  res.send("Get all users");
});
router.get("/users/:id", (req, res) => {
  res.send("Get user by id");
});
router.delete("/users/:id", (req, res) => {
  res.send("Delete user");
});

module.exports = router;
