import { Request, Response } from "express";
import { db } from "../index";

export function getUsers(req: Request, res: Response): void {
    const query: string = `
    SELECT Id,Name,Breed,Age FROM breeds
    `
    db.all(query, (err, data: any) => {
        if(err) {
            console.log(`Error fetching breeds`)
            res.status(500).send('Server error')
        }
        else {
        res.status(200).json(data)
    }
})
}

export function createDog(req: Request, res: Response): void {

    const data = req.body;
    const query: string = `
    INSERT INTO breeds (Name,Breed,Age)
    VALUES (?,?,?)`;
    const queryData = [data.Name, data.Breed, data.Age]
    db.run(query, queryData, (err: Error) => {
        if (err) {
            console.log(err.message)
            console.log(`Error trying to create new dog ${err}`)
            res.status(500).send(`Error creating dog`)
        }
        else {
            res.status(201).json();
    }
})
}

export function deleteBreed(req: Request, res: Response): void {
    const id = req.params.id;
    const query = `
    DELETE FROM breeds WHERE Id = ?`;
    db.run(query, [id], (data: any, err: Error) => {
        if(err) {
            console.log(`Error deleting breed`)
        }
        else {

         res.status(200).json(data)
}})
}

export function updateUser(req: Request, res: Response): void {
    const id = req.params.id;
    const { Name } = req.body;
    const query = `UPDATE breeds SET Name = ? WHERE Id = ?`;

    db.run(query, [Name, id], (err: Error) => {
        if(err) {
            console.log(`Error updating name for breed with ID: ${id}`)
        }
        else {
            res.status(200).json({message: `Breed name updated successfully`, Name})
        }
    })
}