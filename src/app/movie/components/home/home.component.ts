import { MovieService } from './../../services/movie.service';
import { Component, OnInit } from '@angular/core';
import { Movie } from '../../interfaces/movie';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  movies: Movie[];

  constructor(
    private movieService: MovieService
  ) { }

  ngOnInit(): void {
    // Cuándo tenemos que usar el .unsuscribe()¿?
    this.movieService.getMovies$().subscribe(movies => this.movies = movies);
  }

}
