import { Component, Input } from '@angular/core';
import { SearchResult } from 'src/app/core/models';

@Component({
  selector: 'app-search-result-item',
  templateUrl: './search-result-item.component.html',
  styleUrls: ['./search-result-item.component.css']
})
export class SearchResultItemComponent {
  @Input() public result?:SearchResult
}
