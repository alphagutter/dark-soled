"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postCharacter = exports.deleteCharacter = exports.getCharacter = exports.getCharacters = void 0;
const getCharacters = (req, res) => {
    res.json({
        msg: 'get Characters'
    });
};
exports.getCharacters = getCharacters;
const getCharacter = (req, res) => {
    res.json({
        msg: 'get Character',
        id: req.params.id
    });
};
exports.getCharacter = getCharacter;
const deleteCharacter = (req, res) => {
    res.json({
        msg: 'delete Character',
        id: req.params.id
    });
};
exports.deleteCharacter = deleteCharacter;
const postCharacter = (req, res) => {
    const { body } = req;
    res.json({
        msg: 'post Character',
        body
    });
};
exports.postCharacter = postCharacter;
