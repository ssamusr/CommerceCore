const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("./public"));
app.use("/", require("./src/routes/index"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
