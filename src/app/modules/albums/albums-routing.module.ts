import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AlbumsComponent } from './components/albums/albums.component'
import { AlbumResolver } from './resolvers/album.resolver'

const routes: Routes = [{ path: '', component: AlbumsComponent, resolve: {albums: AlbumResolver} }]

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class AlbumsRoutingModule {}
