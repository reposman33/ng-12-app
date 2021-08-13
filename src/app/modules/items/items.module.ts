import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MatSliderModule } from '@angular/material/slider'

import { ItemsRoutingModule } from './items-routing.module'
import { ItemsComponent } from './components/items/items.component'

@NgModule({
	declarations: [ItemsComponent],
	imports: [CommonModule, MatSliderModule, ItemsRoutingModule],
})
export class ItemsModule {}
