import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { UsersComponent } from './components/users.component'
import { UserResolver } from './resolvers/user.resolver'

const routes: Routes = [
	{ path: '', component: UsersComponent, resolve: { userResolver: UserResolver } },
]

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
	providers: [UserResolver],
})
export class UsersRoutingModule {}
