import { Component } from '@angular/core';
import { FormBuilder , FormGroup, FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { SearchQuery } from 'src/app/core/models';
import { MainSearchService } from 'src/app/core/services/main-search.service';

@Component({
  selector: 'app-home-search',
  templateUrl: './home-search.component.html',
  styleUrls: ['./home-search.component.css']
})
export class HomeSearchComponent {
  searchFormGroup:FormGroup;
  generatedSearchQuery:BehaviorSubject<SearchQuery[]> = new BehaviorSubject<SearchQuery[]>([]);//limit to 4
  droppedDown:boolean = false;
  searchQuery?:string;
  searchQueryInputBackgroundDark:boolean = false;
 
  constructor(private formBuiler:FormBuilder,private searchService:MainSearchService, private router:Router){
    this.searchFormGroup = this.formBuiler.group({"search-query":["",]});
  }

  onSearch(){
    console.log('Search: ', this.searchQuery)
    if(this.searchQuery){
      this.searchService.search(this.searchQuery);
      this.router.navigate(['search-results']);
    }
  }

  setSearchQuery(searchQuery:string){
    this.searchQuery = searchQuery;
  }

  onSearchInput(event:any){
    if(event.target.value != ''){
      this.searchQueryInputBackgroundDark = !this.searchQueryInputBackgroundDark;
      this.generatedSearchQuery.next([{search:"University"},{search:"How to make money"},{search:"Everything that matter"}]);
      console.log("Event: ", this.searchFormGroup.value)  
    }
    else {
      this.searchQueryInputBackgroundDark = !this.searchQueryInputBackgroundDark;   
      this.generatedSearchQuery.next([]);
      console.log("Event: ", this.searchFormGroup.value)
    }
  }
}
