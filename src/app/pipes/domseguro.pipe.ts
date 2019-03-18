import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer  } from '@angular/platform-browser';


@Pipe({
  name: 'domseguro'
})
export class DomseguroPipe implements PipeTransform {

  constructor( private domSanitizer: DomSanitizer ) { }

  transform( value: string ): any {
    const url = 'https://open.spotify.com/embed/track/';
    const cadena = value.split(':');
    return this.domSanitizer.bypassSecurityTrustResourceUrl( url + cadena[2] );
  }

}
