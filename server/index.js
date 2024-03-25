const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const fileUpload = require('express-fileupload'); 

const userRoutes = require("./routes/userRoutes");
const postRoutes = require("./routes/postRoutes");
const {notFound, errorHandler} = require("./middleware/errorMiddleware");

const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(fileUpload());
app.use('/uploads', express.static(__dirname + '/uploads'));


app.use("/api/users", userRoutes);;
app.use("/api/posts", postRoutes);

app.use(notFound)
app.use(errorHandler)


mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(`Error connecting to MongoDB: ${err}`));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
