"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const character_1 = require("../controllers/character");
const router = (0, express_1.Router)();
//nos va a traer el getCharacters si no tenemos nada en la línea del https
router.get('/', character_1.getCharacters);
router.get('/:reqName', character_1.getCharacter);
router.delete('/:id', character_1.deleteCharacter);
router.post('/', character_1.postCharacter);
exports.default = router;
