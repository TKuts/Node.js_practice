const { Router } = require("express");
const path = require("node:path");
const router = Router();

router.get("/", (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, "../public/index.html"));
});

module.exports = router;
