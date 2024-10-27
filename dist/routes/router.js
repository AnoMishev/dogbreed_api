"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const handler_1 = require("../handler/handler");
const router = (0, express_1.Router)();
router.get(('/'), handler_1.getUsers);
// router.post('/')
// router.get('/:id')
// router.patch('/:id')
// router.delete('./:id')
exports.default = router;
