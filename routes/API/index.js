const router = require("express").Router();
const bookRoutes = require("./books");

// Book routes
router.use("/api", bookRoutes);

module.exports = router;
