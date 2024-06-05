import mysql from 'mysql2/promise'
import db from '../config/database.js';

export default class infoController{
    static async index(req,res){
        let connection;

        try{
            connection=await mysql.createConnection(db)
            const [result]= await connection.execute("SELECT * FROM bob")
            console.log(result)
            res.json(result)
        }catch(error){
            res.status(500).json({'error':error.message})
        }finally{
            if(connection){
                await connection.end()
            }

        }
    }

 /*    static async store(req,res){
        let connection;

        try{
            const { nombre, descripcion, img} = req.body
            connection=await mysql.createConnection(db)
            const [result]= await connection.execute("SELECT * FROM bob")
            console.log(result)
            res.json(result)
        }catch(error){
            res.status(500).json({'error':error.message})
        }finally{
            if(connection){
                await connection.end()
            }

        } */

    
}