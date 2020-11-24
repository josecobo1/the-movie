import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Movie } from '../interfaces/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  url = environment.URL;

  constructor(private http: HttpClient) { }

  // Recupera todas las peliculas de la API
  getMovies$(): Observable<Movie[]>{

    return this.http.get<Movie[]>(this.url);

  }



  // Recuper 1 pelicula por id de la API
  // getMovies(id)


}
