import express from "express";
import cors from "cors";

async function main() {
  const hostname = "localhost";
  const port = 3000;

  const app = express();

  app.use(express.json());
  app.use(cors());

  app.get("/", (req, res) => {
    res.send({
      sucesso: true,
      statusCode: 200,
      body: "welcome to MyGastronomy!",
    });
  });

  app.listen(port, hostname, () => {
    console.log(`Server running on: http://${hostname}:${port}`);
  });
}

main();
