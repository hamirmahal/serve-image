import bodyParser from "body-parser";
import express, { Request, Response } from "express";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
app.get("/img/:metadata", (req: Request, res: Response) => {
  const { metadata } = req.params;
  console.log(metadata);
  res.sendFile(__dirname + "/img.png");
});
