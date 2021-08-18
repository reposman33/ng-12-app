import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MatSelectModule } from '@angular/material/select'
import { MatFormFieldModule } from '@angular/material/form-field'

import { PhotosRoutingModule } from './photos-routing.module'
import { PhotosComponent } from './components/photos/photos.component'

@NgModule({
	declarations: [PhotosComponent],
	imports: [CommonModule, MatSelectModule, MatFormFieldModule, PhotosRoutingModule],
})
export class PhotosModule {}
