import { Component, OnInit } from "@angular/core";
import { MoviesService } from "src/app/service/movies.service";
import { ActivatedRoute, Params } from "@angular/router";
import { DomSanitizer } from "@angular/platform-browser";
import { MatDialog } from "@angular/material";
import { AppMovieDialogComponent } from "../movie-details/app-movie-dialog/app-movie-dialog.component";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-movie-details",
  templateUrl: "./movie-details.component.html",
  styleUrls: ["./movie-details.component.scss"],
})
export class MovieDetailsComponent implements OnInit {
  public id: number;
  public video: boolean;
  movie: any;
  baseUrl = "https://www.youtube.com/embed/";
  autoplay = "?rel=0;&autoplay=1&mute=0";
  relatedvideo: any;
  casts: any = [];
  backdrops: any = [];
  recomendMovies: any = [];
  responsiveOptions;

  constructor(
    private movieService: MoviesService,
    private router: ActivatedRoute,
    private sanitizer: DomSanitizer,
    private dialog: MatDialog,
    private http: HttpClient
  ) {
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
    this.router.params.subscribe((params: Params) => {
      this.id = params["id"];
      this.getSingleMoviesVideos(this.id);
      this.getSingleMoviesDetails(this.id);
      this.getCast(this.id);
      this.getBackropsImages(this.id);
      this.getRecomendMovie(this.id);
    });
  }

  getSingleMoviesDetails(id) {
    this.movieService.getMovie(id).subscribe((res: any) => {
      this.movie = res;
      window.scrollTo(0, 0);
    });
  }

  getSingleMoviesVideos(id) {
    this.movieService.getMovieVideos(id).subscribe((res: any) => {
      if (res.results.length) {
        this.video = res.results[0];
        this.relatedvideo = res.results;
      }
    });
  }

  openDialogMovie(movie): void {
    let foundVideo = false;

    //pegar o nome Animação dentro do array de generos
    this.movie.genres.forEach((genre) => {
      if (genre.id === 16) {
        // pegar o movie.title e concatenar com o nome do genero
        this.searchOnYoutube(
          this.movie.title + " " + "official trailer dublado"
        );
        foundVideo = true;
      }
    });

    if (!foundVideo) {
      console.log(this.movie.genres);
      try {
        this.video["url"] = this.sanitizer.bypassSecurityTrustResourceUrl(
          this.baseUrl + movie.key + this.autoplay
        );
        this.dialog.open(AppMovieDialogComponent, {
          height: "600px",
          width: "900px",
          data: { video: this.video },
        });
      } catch (error) {
        console.log(error.message);
        this.searchOnYoutube(
          this.movie.title + " " + "official trailer dublado"
        );
      }
    }
  }

  searchOnYoutube(searchTerm: string): void {
    console.log(searchTerm);
    const API_KEY = "AIzaSyAEO4tW03FnmcdRdrbCIA6jqrh6QU8-Ctg";
    const apiUrl = `https://www.googleapis.com/youtube/v3/search?q=${searchTerm}&key=${API_KEY}&part=snippet&type=video&maxResults=1`;
    this.http.get(apiUrl).subscribe(
      (response: any) => {
        const videoId = response.items[0].id.videoId;
        this.video = response.items[0];
        this.video["url"] = this.sanitizer.bypassSecurityTrustResourceUrl(
          this.baseUrl + videoId + this.autoplay
        );
        this.dialog.open(AppMovieDialogComponent, {
          height: "600px",
          width: "900px",
          data: { video: this.video },
        });
      },
      (error) => {
        alert(
          "Não foi possível encontrar um vídeo no Youtube para esta pesquisa."
        );
      }
    );
  }

  getCast(id) {
    this.movieService.getMovieCredits(id).subscribe((res: any) => {
      this.casts = res.cast;
    });
  }

  getBackropsImages(id) {
    this.movieService.getBackdropsImages(id).subscribe((res: any) => {
      this.backdrops = res.backdrops;
    });
  }

  getRecomendMovie(id) {
    this.movieService.getRecomendMovies(id).subscribe((res: any) => {
      this.recomendMovies = res.results;
    });
  }
}
