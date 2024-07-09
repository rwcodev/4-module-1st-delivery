import { User } from "../../data/postgres/models/user.model";

enum UserRole {
    EMPLOYEE ='EMPLOYEE',
    CLIENT= 'CLIENT',
}

enum UserStatus {
    ACTIVE = 'ACTIVE',
    DISABLED = 'DISABLED',
}

export class UserService {

    constructor() {

    }

    async createUser(userData:any){
        const User = new User();

        user.name = user.name.toLowerCase().trim();
        user.email = userData.email.toLowerCase().trim();
        user.password = userData.password.trim();
        user.rol = UserRole.CLIENT;
        try{
            return await userData.save();
        } catch (error) {
            console.log(error)
        }
    }

    async findAllUsers () {
        try {

        } catch (error) { 
            
    }

    async findOneUser () {
        
    }

    async updateUser () {
        
    }

    async deleteUser () {
        
    }

}