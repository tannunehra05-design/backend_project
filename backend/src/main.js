import express from "express";
import AuthRoute from "./route/auth.route.js";
import dbConnect from "./config/db.config.js";
import MenuRoute from "./route/menu.route.js";

const app = express();
const PORT = 3000;

app.use(express.json());

app.use('/auth',AuthRoute);
app.use('/menu', MenuRoute); 

app.get("/", async (req, res) => {
  res.json({
    success: true,
    message: "server is running",
  })
});


app.listen(PORT, () => {
  dbConnect();
  console.log(`Server is running on port ${PORT}`);
});