import { Router } from "express";
import { createDog, deleteBreed, getUsers, updateUser } from "../handler/handler";

const router = Router();

router.get(('/'), getUsers)
router.post('/', createDog)
// router.get('/:id')
router.patch('/:id', updateUser)
router.delete('/:id', deleteBreed)
export default router;