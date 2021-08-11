import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './components/customers/customers.component';

@NgModule({
  declarations: [
    CustomersComponent,
  ],
  imports: [
    CommonModule,
    MatSelectModule,
    MatFormFieldModule,
    CustomersRoutingModule,
  ],
})
export class CustomersModule { }
