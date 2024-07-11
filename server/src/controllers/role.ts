import {Request, Response} from 'express';
import Role from '../models/role';


export const getRoles = async(req:Request, res:Response) => {
    const listRoles = await Role.findAll()

    res.json(listRoles)
}
