import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { PostsRoutingModule } from './posts-routing.module'
import { PostsComponent } from './components/posts/posts.component'
import { PostsResolver } from './resolvers/posts.resolver'
import { PostsService } from 'src/app/services/posts.service'

@NgModule({
	declarations: [PostsComponent],
	imports: [CommonModule, PostsRoutingModule],
	providers: [PostsResolver, PostsService],
})
export class PostsModule {}
