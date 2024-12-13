const router = require("express").Router();

router.use("/admin", require("./adminRoutes"));
router.use("/", require("./userRoutes"));
router.use("/auth", require("./authRoutes"));

module.exports = router;
