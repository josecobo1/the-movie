import { Subscription } from 'rxjs';
import { MovieService } from './../../services/movie.service';
import { Component, OnInit } from '@angular/core';
import { Movie } from '../../interfaces/movie';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  movies: Movie[];
  moviesList: Observable<Movie[]>;
  private subsribe: Subscription;

  constructor(
    private movieService: MovieService
  ) { }

  ngOnInit(): void {
    // Cuándo tenemos que usar el .unsuscribe()¿?
    //this.subsribe = this.movieService.getMovies$().subscribe(movies => this.movies = movies);
    this.moviesList = this.movieService.getMovies$();
    console.log(this.moviesList);
  }

  onOnDestroy(): void {
    this.subsribe.unsubscribe();
  }

}
