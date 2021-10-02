import { Component, Input, OnInit, Output } from '@angular/core';
import { Movie } from 'src/app/helpers';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})


export class MovieListComponent implements OnInit {

  @Input() titleReceivedFromApp: string = "";
  @Input() titleToBePassedToMovieComponent: string = "";

  movieReceivedFromMovieCom = {} as Movie;

  // newMovie: Movie = {
  //   name: "test1",
  //   releaseDate: "test2",
  //   producerName: "test3",
  //   genre: "Action"
  // }

  ngOnInit(): void {
  }
  onMovieSend(value: Movie) {

    // console.log(`Test`, value);

    this.movieReceivedFromMovieCom = value;

    // console.log(`VVVVV`, this.movieReceivedFromMovieCom);

  }

  showFullMovie(movie: Movie) {
    const { name, releaseDate, producerName, genre } = movie
    if (!movie.name) {
      return
    }
    return `
    The movie form Movie Component is: 
    Name: ${name},
    ReleaseDate: ${releaseDate},
    ProducerName: ${producerName},
    Genre: ${genre}
    `
  }


}
