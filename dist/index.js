"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const express_1 = __importDefault(require("express"));
const router_1 = __importDefault(require("./routes/router"));
const sqlite3_1 = __importDefault(require("sqlite3"));
const path_1 = __importDefault(require("path"));
const cors = require('cors');
sqlite3_1.default.verbose();
const app = (0, express_1.default)();
app.use(cors());
app.use(express_1.default.json());
app.listen(8080, () => {
    console.log('the server works!');
});
app.use('/breeds', router_1.default);
const DB_PATH = path_1.default.join(__dirname, 'db.sqlite');
exports.db = new sqlite3_1.default.Database(DB_PATH, (err) => {
    console.log(err);
});
const init = function () {
    exports.db.serialize(() => {
        const query = `
        CREATE TABLE IF NOT EXISTS breeds(
        Id INTEGER PRIMARY KEY AUTOINCREMENT,
        Name TEXT NOT NULL,
        Breed TEXT NOT NULL,
        Age TEXT NOT NULL)`;
        exports.db.run(query, (err) => {
            console.log(err);
        });
    });
};
init();
