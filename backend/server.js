const express = require("express");
const connectDB = require("./database/dbconfg.js"); 
const cors = require("cors"); // Import cors

const UserRoute = require("./routes/UserRoute");
const app = express();
const port = 8000;

app.use(express.json()); 
app.use(cors())
app.use(cors({
    origin: 'http://localhost:8000' 
}));
app.use('/user', UserRoute);
connectDB();
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
