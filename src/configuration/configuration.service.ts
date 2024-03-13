import { Injectable } from "@nestjs/common";
import * as mysql from 'mysql';
// import { databaseConfig } from './database.config';

@Injectable()
export class ConfigurationService{

    
//     private connection: mysql.Connection;

//   constructor() {
//     this.connection = mysql.createConnection(databaseConfig);
//     this.connection.connect((err) => {
//       if (err) {
//         console.error('Error connecting to MySQL database:', err);
//         return;
//       }
//       console.log('Connected to MySQL database!');
//     });
//   }

    private readonly databaseUri: {};
    private connection: mysql.Connection;

    // databaseUri: string;
    constructor (databaseUri: {}){
        this.databaseUri = databaseUri;
        console.log("URI : ", databaseUri);
        // this.connection = mysql.createConnection(databaseUri);
        this.connection = mysql.createConnection({ databaseUri, password: 'sashtiga' });
        this.connection.connect((err) => {
            if (err) {
                console.error('Error connecting to MySQL database:', err);
                return;
            }
            console.log('Connected to MySQL database!');
        });
    }

    getConnection(): mysql.Connection {
        return this.connection;
    }
}