import { AngularFirestore, AngularFirestoreDocument, QuerySnapshot } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Movie } from '../interfaces/movie';
import { query } from '@angular/animations';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private _url = environment.URL;

  constructor(private http: HttpClient, private afs: AngularFirestore) { }

  // Recupera todas las peliculas de la API
  // getMovies$(): Observable<Movie[]>{

  //   return this.http.get<Movie[]>(this._url);

  // }

  private movieDoc: AngularFirestoreDocument<Movie>;

  getMovies$(): Observable<Movie[]> {
    return this.afs.collection<Movie>('movies').valueChanges();
  }


  // Recuper 1 pelicula por id de la API
  getMovie$(id: string): Observable<Movie> {

    return this.http.get<Movie>(`${this._url}${id}`);

  }


}
