import { Body, Controller, Get, Param, ParseIntPipe, Post } from "@nestjs/common";
import { MovieService } from "./movie.service";

@Controller('movie')
export class MovieController {

    constructor (private movieService: MovieService){}

    @Get('number/:number')
    getNumber(@Param('number', ParseIntPipe) number: number) : number {
       return this.movieService.getNumber(number);
    }

    @Get('single-movie/:title')
    getUser(@Param('title') title: string): {title: string; author: string, price: number;} {
        return this.movieService.getMovie(title);
    }

    @Get('movies')
    getUsers() : {title: string; author: string, price: number;}[]  {
        return this.movieService.getMovies();
    }

    @Post('single-movie/add-movie')
    createUser(@Body('title') title: string) : {title: string; author: string, price: number;}{
        let movie = {title: title, author: '', price: 0};
        this.movieService.addMovie(movie);
        return movie;
    }
}