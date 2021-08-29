const path = require('path');
//using express
const express = require("express");
const app = express();

const shopRoutes = require("./routes/shop");
const adminData = require("./routes/admin");

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.router);

app.use(shopRoutes);

app.use((req,res, next) => {
  res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(4000);
