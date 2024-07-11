"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postCharacter = exports.deleteCharacter = exports.getCharacter = exports.getCharacters = void 0;
const character_1 = __importDefault(require("../models/character"));
const sequelize_1 = require("sequelize");
const getCharacters = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listCharacters = yield character_1.default.findAll({ where: { deleted: false } });
    res.json(listCharacters);
});
exports.getCharacters = getCharacters;
const getCharacter = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //le pasamos el parametro del nombre, y me va a devolver todos los characters
    //que tengan el nombre que le pedí
    const { reqName } = req.params;
    try {
        //lo que hace es buscar el nombre de los characters
        //verifica si están o no eliminados
        const characters = yield character_1.default.findAll({
            where: {
                deleted: false,
                name: {
                    [sequelize_1.Op.like]: `%${reqName}%`
                }
            }
        });
        if (characters.length > 0) {
            res.json(characters);
        }
        else {
            res.status(404).json({
                msg: "There's no characters with that name"
            });
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'An error occurred while fetching the character',
        });
    }
});
exports.getCharacter = getCharacter;
const deleteCharacter = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const character = yield character_1.default.findByPk(id);
    /*if(character.deleted == false){
        character.delete = true;
        res.json({msg: `${character.name} deleted`})
    }else{
        res.status(404).json({
            msg: 'Character does not exist',
        });
    }
        */
    try {
        const character = yield character_1.default.findByPk(id);
        if (!character) {
            return res.status(404).json({
                msg: 'Character does not exist',
            });
        }
        if (character.deleted) {
            return res.status(400).json({
                msg: 'Character already deleted',
            });
        }
        character.deleted = true; // Marcar como eliminado
        yield character.save(); // Guardar cambios
        res.json({ msg: `${character.name} deleted` });
    }
    catch (error) {
        res.status(500).json({
            msg: 'An error occurred while deleting the character',
        });
    }
});
exports.deleteCharacter = deleteCharacter;
const postCharacter = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    yield character_1.default.create(body);
    res.json({
        msg: 'Character Created',
    });
});
exports.postCharacter = postCharacter;
