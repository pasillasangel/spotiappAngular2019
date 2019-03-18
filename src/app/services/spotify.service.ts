import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  constructor(  private http: HttpClient ) {
    console.log('Spotify Service Listo');
   }
   getQuery( query: string ) {
    const url = `https://api.spotify.com/v1/${ query }`;
    const headers = new HttpHeaders({
      'Authorization' : 'Bearer BQBgIWluv2jPgRYWGWobO0Q9qaXgLcd01sg86ENtuY9M1ANegruMWySVPmY5FJPDcXeUHY4Ye_aM99SueVQ'
    });
    return this.http.get( url, { headers });
   }
   getnewReleases() {
    return this.getQuery('browse/new-releases?limit=20')
    .pipe( map( data => data['albums'].items ));
   }
   getArtistas( termino: string ) {
     return this.getQuery(`search?query=${ termino }&type=artist&market=MX&offset=0&limit=15`)
    .pipe( map (data => data['artists'].items));
   }
   getArtista( id: string ) {
    return this.getQuery(`artists/${ id }`);
  }
  getTopTracks( id: string ) {
    return this.getQuery(`artists/${ id }/top-tracks?country=US`)
    .pipe( map (data => data['tracks']));
  }
}
