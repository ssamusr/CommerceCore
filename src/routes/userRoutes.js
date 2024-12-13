const router = require("express").Router();

// Products and navigation

router.get("/products", (req, res) => {
  res.send("Get all products");
});
router.get("/products/:id", (req, res) => {
  res.send("Get product by id");
});

// Cart

router.get("/cart", (req, res) => {
  res.send("Get all products in the cart");
});
router.post("/cart", (req, res) => {
  res.send("Add a product to the cart");
});
router.put("/cart/:id", (req, res) => {
  res.send("Update the quantity of a specific product in the cart");
});
router.delete("/cart/:id", (req, res) => {
  res.send("Remove a specific product from the cart");
});

// Orders

router.get("/orders", (req, res) => {
  res.send("Get all orders");
});
router.get("/orders/:id", (req, res) => {
  res.send("Get order by id");
});
router.post("/orders", (req, res) => {
  res.send("Create order");
});

// Profile

router.get("/profile", (req, res) => {
  res.send("Get the user's profile");
});
router.put("/profile", (req, res) => {
  res.send("Update the user's profile");
});

module.exports = router;
