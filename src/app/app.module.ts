import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { MatButtonModule } from '@angular/material/button'
import { MatCardModule } from '@angular/material/card'
import { MatAutocompleteModule } from '@angular/material/autocomplete'
import { AppRoutingModule } from './app-routing.module'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component'
@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		MatButtonModule,
		MatCardModule,
		MatAutocompleteModule,
		BrowserAnimationsModule,
		HttpClientModule,
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
