import db from '../db/connection';
import { DataTypes, Model } from 'sequelize';


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


class Character extends Model {
    public id!: number;
    public name!: string;
    public gender!: string;
    public role!: string;
    public power!: number;
    public deleted!: boolean;
  }
  
  Character.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      gender: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      role: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      power: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      deleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    {
      sequelize: db,
      modelName: 'Character',
      tableName: 'Characters',
      timestamps: false,
      createdAt: false,
      updatedAt: false,
    }
  );
  
  export default Character;