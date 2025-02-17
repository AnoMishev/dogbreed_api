import express, { Express } from "express";
import router from "./routes/router";
import Sqlite3, { sqlite3 } from "sqlite3";
import path from 'path';
const cors = require('cors');

Sqlite3.verbose();
const app: Express = express();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log('the server works!')
})

app.use('/breeds', router)


const DB_PATH:string = path.join(__dirname, 'db.sqlite')
export const db = new Sqlite3.Database(DB_PATH, (err) => {
    console.log(err)
})

const init = function() {
    db.serialize(() => {
        const query = `
        CREATE TABLE IF NOT EXISTS breeds(
        Id INTEGER PRIMARY KEY AUTOINCREMENT,
        Name TEXT NOT NULL,
        Breed TEXT NOT NULL,
        Age TEXT NOT NULL)`;

        db.run(query, (err) => {
            console.log(err)
        })
    })
}
init();
