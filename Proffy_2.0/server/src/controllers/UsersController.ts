import {Request, Response} from 'express';
import bcryp from 'bcrypt';

import db from '../database/connection';
import convertHourToMinutes from '../utils/convertHourToMinutes';


export default class UsersController {

async create (request: Request, response: Response) {
    const {
        first_name,
        last_name,
        email,
        password,
    } = request.body;


    try {
        const hash = await bcryp.hash(password, 10);

        await db('users').insert({
            first_name,
            last_name,
            email,
            password: hash,
            //Avatar default
            avatar: 'https://png.pngtree.com/element_our/png/20181206/users-vector-icon-png_260862.jpg',
            is_active: 0,
            is_staff: 0,
            is_superuser: 0,
        });

        return response.status(201).send();
    } catch (err) {
        return response.status(400).json({
            error: 'Unexpected error while creating new user'
        })
    }
}

async auth (request: Request, response: Response) {
    const {
        email,
        password,
    } = request.body;


    const user = await db('users')
    .where({ email: email })
    .select('password')
    .then(function(result) {
        if (!result || !result[0])  {
            return response.status(400).send({error: 'User not found'});
        }
        var pass = result[0].password;
        if (!bcryp.compare(password, pass)) {
            return response.status(400).send({error: 'Invalid Password'})
        }
        
        response.send({user})
        

    })
    .catch(function(error) {
      console.log(error);
    });

      
      



}


}