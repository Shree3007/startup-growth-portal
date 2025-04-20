const express= require("express");
const connectDB= require("./config/db");
const dotenv = require("dotenv");
const sample=require("./routes/testroute");
const user=require("./routes/userRoute");
const pitch = require("./routes/pitchRoute");
const getpitch = require("./routes/getpitchesRoute");
const mentor = require("./routes/mentorRoute");
const userPitches= require("./routes/userpitchesRoute");
const reviewRequest = require("./routes/reviewRequestRoute")
const getcomments = require("./routes/getCommentRoute");
const mentorAuthRoutes = require('./routes/mentorAuth');
const patchMessage = require("./routes/patchMessageRoute")
const getAllRequest = require('./routes/getAllRequestsRoute');
const decisionRoute = require("./routes/decisionRoute");
const getFeedbackRoute = require("./routes/getFeedbackRoute");
const patchFeedbackRoute= require("./routes/patchFeedbackRoute");
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
app.use("/api",getpitch);
app.use("/api",mentor);
app.use("/api",userPitches);
app.use("/api",reviewRequest);
app.use('/api', mentorAuthRoutes);
app.use("/api",getcomments);
app.use("/api",patchMessage);
app.use("/api", getAllRequest);
app.use("/api", decisionRoute);
app.use("/api",getFeedbackRoute);
app.use("/api",patchFeedbackRoute);


app.listen(process.env.PORT || 5000, () => {
    console.log(`Server running on PORT ${process.env.PORT}`);
});


