import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AuthGuard } from './guards/auth-guard'
import { AccessComponent } from './modules/access/components/access/access.component'

const routes: Routes = [
	{
		path: 'photos',
		loadChildren: () =>
			import('./modules/photos/photos.module').then((m) => m.PhotosModule),
		canLoad: [AuthGuard],
	},
	{
		path: 'albums',
		loadChildren: () =>
			import('./modules/albums/albums.module').then((m) => m.AlbumsModule),
		canLoad: [AuthGuard],
	},
	{
		path: 'users',
		loadChildren: () =>
			import('./modules/users/users.module').then((m) => m.UsersModule),
		canLoad: [AuthGuard],
	},
	{
		path: 'posts',
		loadChildren: () =>
			import('./modules/posts/posts.module').then((m) => m.PostsModule),
	},
	{ path: 'access', component: AccessComponent },
	{ path: '', pathMatch: 'full', redirectTo: 'users' },
]

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
