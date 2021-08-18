import { Component } from '@angular/core'
import { Photo } from '../../models/photo'
import { ActivatedRoute } from '@angular/router'

@Component({
	selector: 'app-photos',
	templateUrl: './photos.component.html',
	styleUrls: ['./photos.component.scss'],
})
export class PhotosComponent {
	photos: Photo[] = []
	allPhotos: Photo[]
	albumIds: number[] = []
	selectedPhoto: Photo
	showPhoto: boolean = false

	constructor(private activatedRoute: ActivatedRoute) {}

	ngOnInit() {
		this.allPhotos = this.activatedRoute.snapshot.data.photos
		this.albumIds = this.allPhotos.reduce((acc: number[], photo: Photo) => {
			!acc.find((albumId) => albumId === photo.albumId) && acc.push(photo.albumId)
			return acc
		}, [])
		this.selectAlbum(1)
	}

	selectAlbum(id: number): void {
		this.photos = this.allPhotos.filter((photo) => photo.albumId === id)
	}

	selectPhoto(photo: Photo): void {
		this.showPhoto = true
		this.selectedPhoto = photo
	}
}
