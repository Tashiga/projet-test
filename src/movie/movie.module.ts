import { Module } from "@nestjs/common";
import { MovieService } from "./movie.service";
import { MovieController } from "./movie.controller";

@Module({
    exports : [MovieService],
    controllers: [MovieController],
    providers : [MovieService],
})
export class MovieModule{}