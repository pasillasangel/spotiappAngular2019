import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html'
})
export class TarjetasComponent {
  @Input() items: any[] = [];
  constructor( private router: Router ) { }
  VerArtista( item: any ) {
    console.log(item.artists);
    let artistaId: string;
    if (item.type === 'artist') {
      artistaId = item.id;
    } else {
      if (typeof item.artists[0].id === 'undefined' || item.artists[0].id === null) {
        artistaId = item.artist[0].id;
      } else {
        artistaId = item.artists[0].id;
      }
    }
    this.router.navigate(['/artist', artistaId]);
  }
}
