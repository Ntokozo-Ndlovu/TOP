import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { SearchResponse } from 'src/app/core/interface/http';
import { SearchResult } from 'src/app/core/models';
import { GatewayService } from 'src/app/core/services/gateway.service';
import { MainSearchService } from 'src/app/core/services/main-search.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent {
  searchResults:Observable<SearchResult[]>;
  
  constructor(private searchService:MainSearchService){
    this.searchResults = this.searchService.searchResults;
  }
}
