import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {
  loading: boolean;
  nuevasCanciones: any[] = [];
  error = false;
  mensajeError: string;
  constructor( private spotify: SpotifyService ) {
  this.loading = true;
  this.spotify.getnewReleases()
    .subscribe( ( data: any ) => {
      this.nuevasCanciones = data;
      this.loading = false;
    }, ( errorservice ) => {
      this.error = true;
      console.log(errorservice);
      this.mensajeError = errorservice.error.error.message;
      this.loading = false;
    });
  }
}
