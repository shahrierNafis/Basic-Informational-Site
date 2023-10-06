const http = require("http");
const fs = require("fs");

const host = "localhost";
const port = 8000;

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/html",
  });
  let HTMLUrl = "./index.html";
  switch (req.url) {
    case "/": {
      break;
    }
    case "/about": {
      HTMLUrl = "./about.html";
      break;
    }
    case "/contact-me": {
      HTMLUrl = "./contact-me.html";
      break;
    }
    default: {
      HTMLUrl = "./404.html";
      break;
    }
  }
  fs.readFile(HTMLUrl, (error, data) => {
    res.write(data);
    res.end();
  });
});

server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
