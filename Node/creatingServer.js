//using express
const express = require("express");
const app = express();

const shopRoutes = require("./routes/shop");
const adminRoutes = require("./routes/admin");

app.use(express.urlencoded({ extended: true }));

app.use(adminRoutes);

app.use(shopRoutes);

app.listen(4000);
