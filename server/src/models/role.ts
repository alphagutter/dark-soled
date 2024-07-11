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


class Role extends Model {
    public id!: number;
    public name!: string;
    public description!: string;
  }
  
  Role.init(
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
      description : {
        type: DataTypes.STRING,
        allowNull: true,
      },

    },
    {
      sequelize: db,
      modelName: 'Role',
      tableName: 'Roles',
      timestamps: false,
      createdAt: false,
      updatedAt: false,
    }
  );
  
  export default Role;