import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AuthGuard } from './guards/auth-guard'
import { AccessComponent } from './modules/access/components/access/access.component'

const routes: Routes = [
	{
		path: 'photos',
		loadChildren: () =>
			import('./modules/photos/photos.module').then((m) => m.PhotosModule),
			canLoad: [AuthGuard]
	},
	{
		path: 'items',
		loadChildren: () =>
			import('./modules/items/items.module').then((m) => m.ItemsModule),
	},
	{
		path: 'users',
		loadChildren: () =>
			import('./modules/users/users.module').then((m) => m.UsersModule),
	},
	{
		path: 'posts',
		loadChildren: () =>
			import('./modules/posts/posts.module').then((m) => m.PostsModule),
	},
	{path: 'access', component: AccessComponent}
]

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
