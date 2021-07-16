import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BsMaterialAutocompleteModule } from 'bs-material-autocomplete';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BsMaterialAutocompleteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
