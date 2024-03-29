import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {

  constructor( private spotify: SpotifyService ) { }
  loading: boolean;
  artistas: any[] = [];
  buscar(termino: string) {
    this.loading = true;
    this.spotify.getArtistas( termino )
      .subscribe( ( data: any ) => {
        this.artistas = data;
        this.loading = false;
      });
  }
}
