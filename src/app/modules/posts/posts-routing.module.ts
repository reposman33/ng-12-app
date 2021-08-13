import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { PostsResolver } from './resolvers/posts.resolver'
import { PostsComponent } from './components/posts/posts.component'

const routes: Routes = [
	{ path: '', component: PostsComponent, resolve: { postData: PostsResolver } },
	{ path: ':id', component: PostsComponent, resolve: { postData: PostsResolver } },
]

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class PostsRoutingModule {}
