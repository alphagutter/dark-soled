"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = __importDefault(require("../db/connection"));
const sequelize_1 = require("sequelize");
/*
const Character = db.define('Characters', {
    name: {
        type: DataTypes.STRING
    },

    gender: {
        type: DataTypes.STRING
    },

    role: {
        type: DataTypes.STRING
    },

    power: {
        type: DataTypes.INTEGER
    }
}, {
    createdAt: false, updatedAt: false
});

export default Character;
*/
class Role extends sequelize_1.Model {
}
Role.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
}, {
    sequelize: connection_1.default,
    modelName: 'Role',
    tableName: 'Roles',
    timestamps: false,
});
exports.default = Role;
