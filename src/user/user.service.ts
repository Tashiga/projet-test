import { Injectable } from "@nestjs/common";

type User = {
    username: string; 
    psw: string;
    createdAt: Date;
};

const USERS :User [] = 
  [
    {username: 'user1', psw: 'test', createdAt: new Date()}, 
    {username: 'user2', psw: 'pwd', createdAt: new Date()}, 
    {username: 'user3', psw: 'passWord', createdAt: new Date()}
  ];

@Injectable()
export class UserService {
   
    getNumber(number: number): number{
        return number + number;
    }

    getUsers() : {username: string, psw: string, createdAt: Date} []  {
        return USERS;
    }

    getUser(username: string) : {username: string, psw: string, createdAt: Date} {
        let user = null;
        USERS.forEach(u=> {
            if(u.username === username)
            user = u;
        });
        return user;
    }

    addUser(user: {username: string, psw: string, createdAt: Date}): void {
        USERS.push(user);
    }
}