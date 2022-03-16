import express from "express";

let app = express();
const PORT: string | number = process.env.PORT || 4000;
import swaggerUi from "swagger-ui-express";
import YAML from "yamljs";
const swaggerDocument = YAML.load("./swagger.yaml");

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get("/add/:num1/:num2", (req, res, next) => {
  let num1 = parseFloat(req.params.num1);
  let num2 = parseFloat(req.params.num2);
  if (!Number.isNaN(num1) || !Number.isNaN(num2)) {
    res.send(`${num1 + num2}`);
  } else {
    next("Only Numbers  values are allowed");
  }
});
app.get("/sub/:num1/:num2", (req, res, next) => {
  let num1 = parseFloat(req.params.num1);
  let num2 = parseFloat(req.params.num2);
  if (!Number.isNaN(num1) || !Number.isNaN(num2)) {
    res.send(`${num1 - num2}`);
  } else {
    next("Only Numbers  values are allowed");
  }
});
app.get("/multiply/:num1/:num2", (req, res, next) => {
  let num1 = parseFloat(req.params.num1);
  let num2 = parseFloat(req.params.num2);
  if (!Number.isNaN(num1) || !Number.isNaN(num2)) {
    res.send(`${num1 * num2}`);
  } else {
    next("Only Numbers  values are allowed");
  }
});
app.get("/divide/:num1/:num2", (req, res, next) => {
  let num1 = parseFloat(req.params.num1);
  let num2 = parseFloat(req.params.num2);
  if (!Number.isNaN(num1) || !Number.isNaN(num2)) {
    res.send(`${num1 / num2}`);
  } else {
    next("Only Numbers  values are allowed");
  }
});
app.listen(PORT, () => {
  console.log(`Server started at ${PORT}`);
});
