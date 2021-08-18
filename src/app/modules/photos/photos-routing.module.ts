import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { PhotosComponent } from './components/photos/photos.component'
import { PhotoResolver } from './resolvers/photos.resolver'

const routes: Routes = [
	{ path: '', component: PhotosComponent, resolve: { photos: PhotoResolver } },
]

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class PhotosRoutingModule {}
