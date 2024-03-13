import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  // private users :{username: string, psw: string, createdAt: Date} [] = 
  // [
  //   {username: 'user1', psw: 'test', createdAt: new Date()}, 
  //   {username: 'user2', psw: 'pwd', createdAt: new Date()}, 
  //   {username: 'user3', psw: 'passWord', createdAt: new Date()}
  // ];

  // getUsers() : {username: string, psw: string, createdAt: Date} []  {
  //   return this.users;
  // }

  // getUser(username: string) : {username: string, psw: string, createdAt: Date} {
  //   let user = null;
  //   this.users.forEach(u=> {
  //     if(u.username === username)
  //       user = u;
  //   });
  //   return user;
  // }

  // addUser(user: {username: string, psw: string, createdAt: Date}): void {
  //   this.users.push(user);
  // }
}
