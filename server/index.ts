
import dotenv from "dotenv";
import express, { Express, Request, Response } from "express";
import path from "path";
import cors from "cors";


var bodyParser = require('body-parser')
const fileUpload = require("express-fileupload");
let multer = require('multer');
let upload = multer();

dotenv.config();

const app: Express = express();



app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
app.use(bodyParser.json())

app.post("/upload", upload.any(), function (req, res) {
  var files: any = (req as any).files
 
  console.log(req)
  console.log(files);

  res.send('File received')
})

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World From the Typescript Server!')
});



const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});


