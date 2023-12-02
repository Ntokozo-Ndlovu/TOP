import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeSearchComponent } from './home-search/home-search.component';
import { HomeRoutingModule } from './home-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchModule } from '../search/search.module';


@NgModule({
  declarations: [
    HomeSearchComponent
  ],
  imports: [
    HomeRoutingModule,
    ReactiveFormsModule,
    CommonModule,
    SearchModule
  ]
})
export class HomeModule { }
