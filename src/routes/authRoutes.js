const router = require("express").Router();

router.post("/register", (req, res) => {
  res.send("Register a new user");
});
router.post("/login", (req, res) => {
  res.send("Login a user");
});
router.post("/logout", (req, res) => {
  res.send("Logout a user");
});
router.post("/refresh", (req, res) => {
  res.send("Refresh the access token");
});

module.exports = router;
