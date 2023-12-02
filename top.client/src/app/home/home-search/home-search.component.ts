import { Component } from '@angular/core';
import { FormBuilder , FormGroup, FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { SearchQuery } from 'src/app/core/models';

@Component({
  selector: 'app-home-search',
  templateUrl: './home-search.component.html',
  styleUrls: ['./home-search.component.css']
})
export class HomeSearchComponent {
  searchFormGroup:FormGroup;
  generatedSearchQuery:BehaviorSubject<SearchQuery[]> = new BehaviorSubject<SearchQuery[]>([]);//limit to 4
  droppedDown:boolean = false;

  searchQueryInputBackgroundDark:boolean = false;
 
  constructor(private formBuiler:FormBuilder, private router:Router){
    this.searchFormGroup = this.formBuiler.group({"search-query":["",]});
  }

  onSearch(){
    this.router.navigate(['search-results']);
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
