import { Component, OnInit } from "@angular/core";
import { MoviesService } from "src/app/service/movies.service";
import { delay } from "rxjs/internal/operators/delay";

@Component({
  selector: "app-movies",
  templateUrl: "./movies.component.html",
  styleUrls: ["./movies.component.scss"],
})
export class MoviesComponent implements OnInit {
  topRated: any;
  responsiveOptions;
  loader = true;
  totalResults: any;
  total_results: any;
  searchRes: any;
  searchStr: string;
  suggestions: { title: string }[] = [];
  showSuggestions = false;
  selectedIndex = -1;

  constructor(private movieService: MoviesService) {
    this.responsiveOptions = [
      {
        breakpoint: "1024px",
        numVisible: 3,
        numScroll: 3,
      },
      {
        breakpoint: "768px",
        numVisible: 2,
        numScroll: 2,
      },
      {
        breakpoint: "560px",
        numVisible: 1,
        numScroll: 1,
      },
    ];
  }

  ngOnInit() {
    this.getTopRatedMovies(1);
  }

  getTopRatedMovies(page: number) {
    this.movieService
      .getTopRatedMovies(page)
      .pipe(delay(2000))
      .subscribe(
        (res: any) => {
          this.topRated = res.results;
          this.totalResults = res.total_results;
          this.loader = false;
        },
        (error) => console.log(error)
      );
  }

  changePage(event) {
    this.loader = true;
    this.getTopRatedMovies(event.pageIndex + 1);
  }

  searchSuggestions(): void {
    this.movieService.searchMovies(this.searchStr).subscribe((res) => {
      this.suggestions = res.results;
      this.showSuggestions = true;
    });
  }

  selectSuggestion(suggestion: any): void {
    this.searchStr = suggestion.title;
    this.searchRes = [suggestion];
    this.showSuggestions = false;
  }

  showSuggestion() {
    this.showSuggestions = true;
  }

  searchMovies() {
    this.showSuggestions = false;
    this.selectedIndex = -1;
    this.suggestions = [];

    this.movieService.searchMovies(this.searchStr).subscribe((res) => {
      this.loader = false;
      this.searchRes = res["results"];
      this.totalResults = res["total_results"];
      this.topRated = []; // Limpa a lista de filmes carregados anteriormente

      // se o campo de pesquisa estiver vazio, carrega a lista de filmes novamente
      if (this.searchStr === "") {
        this.loader = true;
        this.getTopRatedMovies(1);
      }
    });
  }
}
