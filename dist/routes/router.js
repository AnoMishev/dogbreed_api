"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const handler_1 = require("../handler/handler");
const router = (0, express_1.Router)();
router.get(('/'), handler_1.getUsers);
router.post('/', handler_1.createDog);
// router.get('/:id')
router.patch('/:id', handler_1.updateUser);
router.delete('/:id', handler_1.deleteBreed);
exports.default = router;
