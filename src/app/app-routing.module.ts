import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

const routes: Routes = [
	{
		path: 'customers',
		loadChildren: () =>
			import('./modules/customers/customers.module').then((m) => m.CustomersModule),
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
]

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
