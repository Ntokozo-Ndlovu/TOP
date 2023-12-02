import { Component } from '@angular/core';
import { SearchResult } from 'src/app/core/models';

@Component({
  selector: 'app-search-results-list',
  templateUrl: './search-results-list.component.html',
  styleUrls: ['./search-results-list.component.css']
})
export class SearchResultsListComponent {
searchResults:SearchResult[] = [{title:'ntokozo',description:'loves school so much',url:'yes I love it'},{title:'ntokozo',description:'loves school so much',url:'yes I love it'}]

}
