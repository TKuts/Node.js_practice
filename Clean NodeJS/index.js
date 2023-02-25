import http from "http";
import fs from "node:fs";

// const dirname = process.env.PWD;

// console.log("dir", dirname);

const index = `./public/index.html`;
const register = `./public/register.html`;

const PORT = 5000;

http
  .createServer((req, res) => {
    res.writeHeader(200, { "content-type": "text/html; charset=utf-8" });
    if (req.url === "/") {
      fs.readFile(index, (err, data) => {
        if (err) {
          throw err;
        }
        res.write(data);
        res.end();
      });
    } else if (req.url === "/about") {
      res.end(
        `<h1>Вибачте!</h1>
		  <p>Зовсім скоро, я напишу цю сторінку</p>
			<a href="/">Повернутись на головну сторінку</a>
			 `
      );
    } else if (req.url === "/register") {
      fs.readFile(register, (err, data) => {
        if (err) {
          throw err;
        }
        res.write(data);
        res.end();
      });
    } else {
      res.end(
        `<h1>Ой!</h1>
		  <p>Щось пішло не так :(</p>
		  <a href="/">Повернутись на головну сторінку</a>
			`
      );
    }
  })
  .listen(PORT, () => console.log(`Server is running on port : ${PORT}`));
