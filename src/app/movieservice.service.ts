import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieserviceService {

  private getAllMovieUrl="https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies";
  private getSingleMovieUrl= "https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies";
  constructor(private http:HttpClient) { }

  getAllMovies(): Observable<any>{
    return this.http.get(this.getAllMovieUrl);
  }

  getMoviesByName(movieName: string): Observable<any> {
    const url = this.getSingleMovieUrl;
    return this.http.get(url);
  }

  getMoviesByGenre(genre: string): Observable<any> {
    const url = this.getSingleMovieUrl;
    return this.http.get(url);
  }
}
