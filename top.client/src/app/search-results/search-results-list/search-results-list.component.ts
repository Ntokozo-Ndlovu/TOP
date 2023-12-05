import { Component, Input } from '@angular/core';
import { SearchResponse } from 'src/app/core/interface/http';
import { SearchResult } from 'src/app/core/models';
import { GatewayService } from 'src/app/core/services/gateway.service';
import {  } from 'rxjs/operators'
import { Observable } from 'rxjs';
@Component({
  selector: 'app-search-results-list',
  templateUrl: './search-results-list.component.html',
  styleUrls: ['./search-results-list.component.css']
})
export class SearchResultsListComponent {
  @Input() searchResults?:Observable<SearchResult[]>;
}
