import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MatSliderModule } from '@angular/material/slider'

import { AlbumsRoutingModule } from './albums-routing.module'
import { AlbumsComponent } from './components/albums/albums.component'

@NgModule({
	declarations: [AlbumsComponent],
	imports: [CommonModule, MatSliderModule, AlbumsRoutingModule],
})
export class AlbumsModule {}
