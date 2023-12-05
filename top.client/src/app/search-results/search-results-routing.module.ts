import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SearchResultsComponent } from './search-results/search-results.component';

const routes:Routes = [
  {
    path:'search-results',
    component:SearchResultsComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
  ], exports:[RouterModule]
})
export class SearchResultsRoutingModule { }
