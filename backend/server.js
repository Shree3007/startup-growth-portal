const express= require("express");
const connectDB= require("./config/db");
const dotenv = require("dotenv");
const sample=require("./routes/testroute");
const user=require("./routes/userRoute");
const pitch = require("./routes/pitchRoute")

const cors = require("cors")

dotenv.config();
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Connect MongoDB
connectDB();

app.use("/api",sample);
app.use("/api",user);
app.use("/api",pitch);



app.listen(process.env.PORT || 5000, () => {
    console.log(`Server running on PORT ${process.env.PORT}`);
});


