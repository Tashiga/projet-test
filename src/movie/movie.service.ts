import { Injectable } from "@nestjs/common";

type Movie = {
    title : string;
    author : string;
    price: number;
}

const MOVIES :Movie [] = 
  [
    {title: 'Naruto et la Princesse des neiges', author: 'Tensai Okamura', price: 19.99}, 
    {title: 'Naruto et La Légende de la pierre de Guelel', author: 'Hirotsugu Kawasaki', price: 24.58}, 
    {title: 'Naruto et Mission spéciale au pays de la Lune', author: 'Toshiyuki Tsuru', price: 9.99}
  ];

@Injectable()
export class MovieService {
   
    getNumber(number: number): number{
        return number + number;
    }

    getMovies() : Movie []  {
        return MOVIES;
    }

    getMovie(title: string) : Movie {
        let movie = null;
        MOVIES.forEach(m=> {
            if(m.title === title)
            movie = m;
        });
        return movie;
    }

    addMovie(movie: Movie): void {
        MOVIES.push(movie);
    }
}