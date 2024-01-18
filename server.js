
//Below are Dependencies:
require("dotenv").config();

require('./config/db.connection.js');

const express = require('express');
const router = express.Router();
const cors = require("cors");
const morgan = require("morgan");

//destructured port variable being accessed from .env file
const { PORT } = process.env;

const productRouter = require('./routes/products');
const usersRouter = require('./routes/users');
const favoritesRouter = require('./routes/favorites');

const app = express();


//app.use -> Middleware
app.use(express.urlencoded({extended:true}));

app.use(cors());
app.use(morgan("dev")); 
app.use(express.json());
// app.use((req, res, next)=>{
//     // console.log(process.env.NODE_ENV);
//     //doesnt have to be req.user can be req.aything
//     req.user = {
//         _id: "65a7e3222022fa6a590f9289",
//         userName: "Greg Daniels",
//         password: "Hg823Lp222",
//         email: "bas11538@gmail.com",
//         bio: "I love shopping. I love taking long walks on the beach in the afternoo…",
//         image: "image",  
//         favorites: []
//     };
//     next();
// });

app.use('/products', productRouter);
app.use('/favorites', favoritesRouter);
app.use('/users', usersRouter);

//app is listening on port https://localhost:4000
app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));

