import { MovieService } from './../../services/movie.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Movie } from '../../interfaces/movie';

@Component({
  selector: 'app-my-movie',
  templateUrl: './my-movie.component.html',
  styleUrls: ['./my-movie.component.scss']
})
export class MyMovieComponent implements OnInit {

  constructor(
      private route: ActivatedRoute,
      private movieService: MovieService
      ) { }

  id: string;
  movie: Movie;

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.movieService.getMovie$(this.id).subscribe(movie => this.movie = movie);
  }

}
