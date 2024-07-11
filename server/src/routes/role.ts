import { Router} from 'express';
import { getRoles } from '../controllers/role';


const router = Router();

//nos va a traer el getRoles si no tenemos nada en la línea del https
router.get('/', getRoles)

export default router;