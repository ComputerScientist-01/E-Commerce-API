const express = require("express");
const app = express();
const morgan = require("morgan");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv/config");

//enabling cors
app.use(cors());
app.options("*", cors());

//environment variables
const api = process.env.API_URL;

//Product routes
const categoriesRoutes = require("./routes/categories");
const productsRoutes = require("./routes/products");
const usersRoutes = require("./routes/users");
const ordersRoutes = require("./routes/orders");

//routers
app.use(`${api}/products`, productsRoutes);
app.use(`${api}/categories`, categoriesRoutes);
app.use(`${api}/users`, usersRoutes);
app.use(`${api}/orders`, ordersRoutes);

//middleware
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(morgan("tiny"));

mongoose
	.connect(process.env.CONNECTION_STRING, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		dbName: "eshop-database",
	})
	.then(() => {
		console.log("Database connection is ready....");
	})
	.catch((err) => {
		console.log(err);
	});

app.listen(3000, () => {
	console.log(api);
	console.log("server is running on http://localhost:3000");
});
