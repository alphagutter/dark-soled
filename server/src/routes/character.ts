import { Router} from 'express';
import { deleteCharacter, getCharacter, getCharacters, postCharacter } from '../controllers/character';

const router = Router();

//nos va a traer el getCharacters si no tenemos nada en la línea del https
router.get('/', getCharacters)
router.get('/:reqName', getCharacter)
router.delete('/:id', deleteCharacter)
router.post('/', postCharacter)

export default router;