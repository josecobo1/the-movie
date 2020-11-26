import { Subscription } from 'rxjs';
import { MovieService } from './../../services/movie.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Movie } from '../../interfaces/movie';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  movies: Movie[];
  private subsribe: Subscription;

  constructor(
    private movieService: MovieService
  ) { }

  ngOnInit(): void {
    // Cuándo tenemos que usar el .unsuscribe()¿?
    this.subsribe = this.movieService.getMovies$().subscribe(movies => this.movies = movies);
  }

  ngOnDestroy(): void {
    this.subsribe.unsubscribe();
  }

}
