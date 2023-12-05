import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { RouterModule } from '@angular/router';
import { SearchResultsModule } from './search-results/search-results.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, HomeModule,RouterModule, SearchResultsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
