import { Body, Controller, Get, Param, ParseIntPipe, Post } from "@nestjs/common";
import { UserService } from "./user.service";

@Controller('user')
export class UserController {

    constructor (private userService: UserService){}

    @Get('number/:number')
    getNumber(@Param('number', ParseIntPipe) number: number) : number {
       return this.userService.getNumber(number);
    }

    @Get('single-user/:username')
    getUser(@Param('username') username: string): {username: string; createdAt: Date;} {
        return this.userService.getUser(username);
        // return {
        //   username,
        //   createdAt: new Date(),
        // }
    }

    @Get('users')
    getUsers() : {username: string, psw: string, createdAt: Date}[]  {
        return this.userService.getUsers();
    }

    @Post('single-user/add-user')
    createUser(@Body('username') username: string) : {username: string, psw: string, createdAt: Date}{
        let user = {username: username, psw: '', createdAt: new Date()};
        this.userService.addUser(user);
        return user;
    }
}