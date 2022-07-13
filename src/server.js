import express from 'express';
import bodyParser from 'body-parser';
import initWebRoutes from "./route/web"
import mongoo from 'mongoose';

require('dotenv').config();

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

initWebRoutes(app);

// var MongoClient = mongoo.MongoClient;
let dburl = "mongodb://localhost:27017/project";
mongoo.connect(dburl, function (err, db) {
    if (err) {
        throw err;
    }
    console.log('db connected');
    db.close();
});

let port = process.env.PORT || 6996;

app.listen(port, () => {
    console.log("hello port nhan :", port);
})