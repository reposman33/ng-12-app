import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router';
import { Album } from '../../models/album';

@Component({
	selector: 'app-albums',
	templateUrl: './albums.component.html',
	styleUrls: ['./albums.component.scss'],
})
export class AlbumsComponent implements OnInit {
	albums: Album[]

	constructor(private activatedRoute: ActivatedRoute) {}

	ngOnInit(): void {
		this.albums = this.activatedRoute.snapshot.data.albums
	}
}
