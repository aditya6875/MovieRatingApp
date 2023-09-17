import { Component, OnInit } from '@angular/core';

import {MatCardModule} from '@angular/material/card';
import { MovieserviceService } from '../movieservice.service';

@Component({
  selector: 'app-maincontent',
  templateUrl: './maincontent.component.html',
  styleUrls: ['./maincontent.component.css'],
  
})
export class MaincontentComponent implements OnInit {

  longText = `Movie Description is Here. we are Working on it.`;
  posterurl="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Fmovie-popcorn&psig=AOvVaw0srXduG3Rx4jGXCTVGbUXQ&ust=1695026970846000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCJijgNihsYEDFQAAAAAdAAAAABAE"

  movies: any[] | undefined;
  searchValue:any="";
  searchName: string = '';
  searchGenre: string = '';
  searchResults: any[] = [];
  
  constructor(private movieService: MovieserviceService) { }

  ngOnInit(): void {
    this.movieService.getAllMovies().subscribe(data=>{
      this.movies=data;
      console.log("this is data",this.movies);
    })
  }

  searchByName() {
    this.movieService.getMoviesByName(this.searchName).subscribe((data) => {
      this.searchResults = data;
    });
  }

  searchByGenre() {
    this.movieService.getMoviesByGenre(this.searchGenre).subscribe((data) => {
      this.searchResults = data;
    });
  }

}
