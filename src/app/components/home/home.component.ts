import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // class members
  movies: any;
  imgBaseUrl: string;
  apiKey: string;

  // inject movies service
  constructor(private moviesService: MoviesService, private router: Router) { }

  // when component loads
  ngOnInit() {
    // subscribe to movies service observable
    this.moviesService.getMovies().subscribe(data => {
      this.movies = data;
    })
    // assign appropriate values
    this.imgBaseUrl = this.moviesService.getImgBaseUrl();
    this.apiKey = this.moviesService.getApiKey();
  }

  goToDetails(id: string) {
    this.router.navigateByUrl(`/movies/${id}`);
  }
}
