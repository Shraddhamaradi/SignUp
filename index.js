const express =require("express");
const connectDB=require("./db"); //import database connected
const cors = require("cors");
const router = require("./routes");


const app = express();
//middleware

app.use(express.json());
app.use(cors());

//connected to monoDB
connectDB();

//routes
app.use("/api",router);


// start server
const port=process.env.PORT || 500;
app.listen(port,() => {
    console.log(` server running on port ${port}`);
});