import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { CustomersComponent } from './components/customers/customers.component'
import { CustomerResolver } from './resolvers/customer.resolver'

const routes: Routes = [{ path: '', component: CustomersComponent, resolve: {customers: CustomerResolver} }]

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class CustomersRoutingModule {}
