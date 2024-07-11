import {Request, Response} from 'express';
import Character from '../models/character';
import { Op } from 'sequelize';


export const getCharacters = async(req:Request, res:Response) => {
    const listCharacters = await Character.findAll(
        {where: {deleted:false}}
    )

    res.json(listCharacters)
}

export const getCharacter = async (req:Request, res:Response) => {

    //le pasamos el parametro del nombre, y me va a devolver todos los characters
    //que tengan el nombre que le pedí
    const { reqName } = req.params;
    try {
        //lo que hace es buscar el nombre de los characters
        //verifica si están o no eliminados
        const characters = await Character.findAll({
            where: {  
                deleted: false,
                name: {
                [Op.like]: `%${reqName}%`
                } }
        });

        if (characters.length > 0) {
            res.json(characters);
        } else {
            res.status(404).json({
                msg: "There's no characters with that name"
            });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'An error occurred while fetching the character',
        });
    }


}

export const deleteCharacter = async(req:Request, res:Response) => {

    const {id} = req.params;
    const character = await Character.findByPk(id);

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
        const character = await Character.findByPk(id);
    
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
        await character.save(); // Guardar cambios
    
        res.json({ msg: `${character.name} deleted` });
      } catch (error) {
        res.status(500).json({
          msg: 'An error occurred while deleting the character',
        });
      }

}

export const postCharacter = async (req:Request, res:Response) => {
    const { body } = req;

    await Character.create(body)

    res.json({
        msg: 'Character Created', 
    })
    
}