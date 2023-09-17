const express = require("express");
const dataRouter = require("./routers/dataRouter");
const dbConnect = require("./dbConnect");
const cors = require("cors");

const app = express();
app.use(
    cors({
      credentials: true,
      origin: "https://holdinfo-g529.onrender.com",
    })
  );

app.use("/data",dataRouter);
app.get("/",(req,res)=>{
    return res.send("started");
})

dbConnect();

app.listen((4000),()=>{
 console.log("server started 4000")
})