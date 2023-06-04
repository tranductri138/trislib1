const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const { reqBank } = require("./src/routes/routes1");

const jsonParser = bodyParser.json();

app.post("/bank", jsonParser, (req, res) => {
  console.log(typeof reqBank);
  const result = reqBank(req.body.code);
  res.status(200).send({
    msg: result,
  })
})

app.get("/get-user-name", (req, res) => {
    res.send({
        msg : 'Tris'
    })
});

app.listen(3000);


app.listen(4000)