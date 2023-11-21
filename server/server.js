require('dotenv').config();

const express = require('express');
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser'); // middleware that adds cookies to the request

require('./config/mongoose.config')

app.use(express.json({limit:"50mb"})); /*  allows JSON Objects to be posted */
app.use(cookieParser());
app.use(express.urlencoded({extended:true})); /* allows JSON Objects with strings and arrays*/
app.use(cors({credentials:true, origin:"http://localhost:3000"})); // middleware sends post data by adding it in

// Add Access Control Allow Origin headers
// app.use((req, res, next) => {
//     res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
//     res.header(
//       "Access-Control-Allow-Headers", "*"
//     );
//     next();
//   });

const UserRoutes = require('./routes/user.route')
UserRoutes(app);

const port = process.env.PORT || 8000;
app.listen(port, ()=> console.log(`Party on port: ${port}`));
