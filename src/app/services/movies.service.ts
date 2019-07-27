import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  // movie database config
  baseURLMovies: string = 'https://api.themoviedb.org/3/discover/movie';
  baseURLMovie: string = 'https://api.themoviedb.org/3/movie';
  apiKey: string = '62ea66fa124fde3e149a324db219b566';
  imgBaseUrl: string = 'https://image.tmdb.org/t/p';

  // inject httpClient
  constructor(private http: HttpClient) { }

  // movies service functions
  getMovies(): Observable<Object> {
    return this.http.get(`${this.baseURLMovies}?sort_by=popularity.desc&api_key=${this.apiKey}`)
  }
  getMovie(id: string): Observable<Object> {
    return this.http.get(`${this.baseURLMovie}/${id}?api_key=${this.apiKey}&language=en-US`)
  }
  getApiKey(): string {
    return this.apiKey
  }
  getImgBaseUrl(): string {
    return this.imgBaseUrl
  }
}
