import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MatTreeModule } from '@angular/material/tree'

import { UsersService } from '../../services/users.service'
import { UsersRoutingModule } from './users-routing.module'
import { UsersComponent } from './components/users.component'
import { UserResolver } from './resolvers/user.resolver'

@NgModule({
	declarations: [UsersComponent],
	imports: [CommonModule, UsersRoutingModule, HttpClientModule, MatTreeModule],
	providers: [UsersService, UserResolver],
})
export class UsersModule {}
