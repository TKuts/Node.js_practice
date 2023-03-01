const { Router } = require("express");
// const path = require("node:path");
const router = Router();

router.get("/about", (req, res) => {
  res.status(200).send(
    `<h1>Вибачте!</h1>
	<p>Зовсім скоро, я напишу цю сторінку</p>
	 <a href="/">Повернутись на головну сторінку</a>
	  `
  );
});

module.exports = router;
