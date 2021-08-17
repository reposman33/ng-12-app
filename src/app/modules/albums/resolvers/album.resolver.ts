import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { Album } from '../models/album';

@Injectable({
  providedIn: 'root'
})
export class AlbumResolver implements Resolve<Album[]> {
  constructor(private apiService: ApiService ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Album[]> {
    return this.apiService.getAlbums();
  }
}
