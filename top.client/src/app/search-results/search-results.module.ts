import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchResultsHeaderComponent } from './search-results-header/search-results-header.component';
import { SearchResultsListComponent } from './search-results-list/search-results-list.component';
import { SearchResultItemComponent } from './search-result-item/search-result-item.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { SearchResultsRoutingModule } from './search-results-routing.module';
import { SearchModule } from '../search/search.module';



@NgModule({
  declarations: [
    SearchResultsHeaderComponent,
    SearchResultsListComponent,
    SearchResultItemComponent,
    SearchResultsComponent
  ],
  imports: [
    SearchModule,
    SearchResultsRoutingModule,
    CommonModule
  ]
})
export class SearchResultsModule { }
