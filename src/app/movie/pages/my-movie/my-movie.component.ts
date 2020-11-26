import { Observable, Subscription } from 'rxjs';
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
  movieList: Observable<Movie[]>;
  movie: Movie;

  private subscribe: Subscription;

  ngOnInit(): void {

    // this.movieList = this.movieService.readOne$(this.route.snapshot.paramMap.get('id'));
    // this.movie = this.movieList[0];
    // console.log(this.movie);


    }
  }
