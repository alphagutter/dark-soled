"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const role_1 = require("../controllers/role");
const router = (0, express_1.Router)();
//nos va a traer el getRoles si no tenemos nada en la línea del https
router.get('/', role_1.getRoles);
exports.default = router;
