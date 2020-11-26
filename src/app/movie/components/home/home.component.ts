import { Subscription } from 'rxjs';
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
  private subsribe: Subscription;

  constructor(
    private movieService: MovieService
  ) { }

  ngOnInit(): void {
    // Cuándo tenemos que usar el .unsuscribe()¿?
    this.subsribe = this.movieService.getMovies$().subscribe(movies => this.movies = movies);
  }

  onOnDestroy(): void {
    this.subsribe.unsubscribe();
  }

}
