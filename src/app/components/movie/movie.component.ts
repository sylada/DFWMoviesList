import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})

export class MovieComponent implements OnInit {

  // class members
  movie: any;
  movieId: string;
  imgBaseUrl: string;
  apiKey: string;

  constructor(private moviesService: MoviesService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    // extract movie id string from route
    this.movieId = this.route.snapshot.paramMap.get('id')
    // get corresponding movie
    this.moviesService.getMovie(this.movieId).subscribe(movie => {
      this.movie = movie;
    })
    // assign appropriate values
    this.imgBaseUrl = this.moviesService.getImgBaseUrl();
    this.apiKey = this.moviesService.getApiKey();
  }

  goHome() {
    this.router.navigateByUrl('/');
  }

}
