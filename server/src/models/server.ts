import express, {Application, Request, Response} from 'express';
import cors from 'cors';
import routesCharacter from '../routes/character';
import routesRoles from '../routes/role';
import db from '../db/connection';

class Server {
    private app: Application;
    private port: string;

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '3001'
        this.listen();
        this.middlewares();
        this.routes();
        this.dbConnect();
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Aplicacion corriendo en el puerto ${this.port}`)
        })
    }

    routes(){
        this.app.get('/', (req:Request, res:Response)  => {
            res.json({
                msg: 'API WORKING'
            })
        })
        this.app.use('/api/characters', routesCharacter);
        this.app.use('/api/roles', routesRoles);
    }

    middlewares(){

        //acá parseamos el body
        this.app.use(express.json());

        //cors
        this.app.use(cors());
    }

    async dbConnect() {

        try {
            await db.authenticate();
            console.log('Base de datos conectada')
        } catch (error) {
            console.log(error)
            console.log('Error al conectarse a la db')

        }

        
    }

}

export default Server;