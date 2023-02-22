import { Component, OnInit, ViewEncapsulation, Inject } from '@angular/core';
import { ActivatedRoute , Params} from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { MatDialog } from '@angular/material';
import { AppTvDialogComponent } from './app-tv-dialog/app-tv-dialog.component';
import { TvService } from 'src/app/service/tv.service';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-tv-show-details",
  templateUrl: "./tv-show-details.component.html",
  styleUrls: ["./tv-show-details.component.scss"],
})
export class TvShowDetailsComponent implements OnInit {
  public id: number;
  public video: boolean;
  episode: any;
  baseUrl = "https://www.youtube.com/embed/";
  autoplay = "?rel=0;&autoplay=1&mute=0";
  related_video: any;
  casts: any;
  backdrop: any;
  _posters: any;
  _recomend: any;
  responsiveOptions;

  constructor(
    private tvService: TvService,
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
      this.id = params.id;
      this.getTvDetails(this.id);
      this.getTvVideos(this.id);
      this.getTvCast(this.id);
      this.getTvBackropsImages(this.id);
      this.getRecomendTv(this.id);
    });
  }

  getTvDetails(id) {
    console.log(id);
    this.tvService.getTVShow(id).subscribe((res: any) => {
      this.episode = res;
      window.scrollTo(0, 0);
    });
  }

  getTvVideos(id) {
    this.tvService.getTvVideos(id).subscribe((res: any) => {
      if (res.results.length) {
        this.video = res.results[0];
        this.related_video = res.results;
      }
    });
  }

  openDialogTv(video): void {
    try {
      if (typeof video.key === "undefined") {
        throw new Error("O trailer não está disponível.");
      }
      this.video["url"] = this.sanitizer.bypassSecurityTrustResourceUrl(
        this.baseUrl + video.key + this.autoplay
      );
      this.dialog.open(AppTvDialogComponent, {
        height: "600px",
        width: "900px",
        data: { video: this.video },
      });
    } catch (error) {
      console.log(error.message);
      this.searchOnYoutube(this.episode.name + " " + "official trailer");
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
        console.log(videoId);
        this.video["url"] = this.sanitizer.bypassSecurityTrustResourceUrl(
          this.baseUrl + videoId + this.autoplay
        );
        this.dialog.open(AppTvDialogComponent, {
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

  getTvCast(id) {
    this.tvService.getMovieCredits(id).subscribe((res: any) => {
      this.casts = res.cast;
    });
  }

  getTvBackropsImages(id) {
    this.tvService.getTvBackdropsImages(id).subscribe((res: any) => {
      this.backdrop = res.backdrops;
    });
  }

  getRecomendTv(id) {
    this.tvService.getRecomendTv(id).subscribe((res: any) => {
      this._recomend = res.results;
    });
  }
}
