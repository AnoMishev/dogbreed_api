"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUsers = getUsers;
exports.createDog = createDog;
exports.deleteBreed = deleteBreed;
exports.updateUser = updateUser;
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
    INSERT INTO breeds (Name,Breed,Age)
    VALUES (?,?,?)`;
    const queryData = [data.Name, data.Breed, data.Age];
    index_1.db.run(query, queryData, (err) => {
        if (err) {
            console.log(err.message);
            console.log(`Error trying to create new dog ${err}`);
            res.status(500).send(`Error creating dog`);
        }
        else {
            res.status(201).json();
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
function updateUser(req, res) {
    const id = req.params.id;
    const { Name } = req.body;
    const query = `UPDATE breeds SET Name = ? WHERE Id = ?`;
    index_1.db.run(query, [Name, id], (err) => {
        if (err) {
            console.log(`Error updating name for breed with ID: ${id}`);
        }
        else {
            res.status(200).json({ message: `Breed name updated successfully`, Name });
        }
    });
}
