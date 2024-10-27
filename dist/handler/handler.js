"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUsers = getUsers;
exports.createDog = createDog;
exports.deleteBreed = deleteBreed;
const index_1 = require("../index");
function getUsers(req, res) {
    const query = `
    SELECT Id,Name,Breed,Age FROM breeds
    `;
    index_1.db.all(query, (err, data) => {
        if (err) {
            console.log(`Error fetching breeds`);
            res.status(500).send('Server error');
        }
        else {
            res.status(200).json(data);
        }
    });
}
function createDog(req, res) {
    const data = req.body;
    const query = `
    INSERT INTO breeds (name,breed,age)
    VALUES (?,?,?)`;
    const queryData = [data.name, data.breed, data.age];
    index_1.db.run(query, queryData, (data, err) => {
        if (err) {
            console.log(err);
        }
        else {
            res.status(200).send('All good');
        }
    });
}
function deleteBreed(req, res) {
    const id = req.params.id;
    const query = `
    DELETE FROM breeds WHERE Id = ?`;
    index_1.db.run(query, [id], (data, err) => {
        if (err) {
            console.log(`Error deleting breed`);
        }
        else {
            res.status(200).json(data);
        }
    });
}
