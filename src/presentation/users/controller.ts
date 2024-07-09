import { Request, Response } from 'express'
import { UserService } from '../services/user.service'
import { CustomError } from '../../domain/errors/custom.errors'



export class UsersController {

    constructor(
        private readonly userService: UserService 
    ){        
    }

    private handleError = (error: unknown, res: Response) => {
        console.log(error)
        if(error instanceof CustomError){
            return res.status(error.statusCode) .json ({ message: error.message })
        }
    
        return res.status(500).json({ message: 'Internal Server Error' })
    } 

    createUser = (req: Request, res: Response ) => {
        const { name, email, password } = req.body;

        this,this.userService.createUser({ name, email, password })
            .then((user) => {
                res.status(201).json(user)
            })
            .catch((error: unknown) => this.handleError{
                res.status(500).json(error)
            })
    }

    findAllUsers = (req: Request, res: Response ) => {
        res.status(200).json({ message: 'ok' })
    }

    findOneUser = (req: Request, res: Response ) => {

    }

    updateUser = (req: Request, res: Response ) => {

    }

    deleteUser = (req: Request, res: Response ) => {
        
    }

}