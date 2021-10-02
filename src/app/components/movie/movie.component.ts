import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Movie } from '../../helpers'

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  constructor() { }

  movieToSend: Movie = {
    name: "Edge of Tomorrow",
    releaseDate: "6 June 2014",
    producerName: "Doug Liman",
    genre: "Action, Adventure, Sci-Fi"


  }

  @Input() titleFromAppComp: string = "";

  @Output() movieSendToMovieList: EventEmitter<Movie> = new EventEmitter<Movie>()

  ngOnInit(): void {
  }

  sendMovieToMovieList() {
    this.movieSendToMovieList.emit(this.movieToSend)
  }

}
