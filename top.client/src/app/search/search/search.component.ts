import { Component } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { SearchQuery } from 'src/app/core/models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchFormGroup:FormGroup;
  generatedSearchQuery:BehaviorSubject<SearchQuery[]> = new BehaviorSubject<SearchQuery[]>([]);//limit to 4
  focus:boolean = false;

  searchQueryInputBackgroundDark:boolean = false;
 
  constructor(private formBuiler:FormBuilder, private router:Router){
    this.searchFormGroup = this.formBuiler.group({"search-query":["",]});
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

  setFocus(){
    if(this.focus == false){
      this.focus = true;  
    }
    else{
      this.focus = false;    
    }
    console.log('Focus: ', this.focus);
  }
  

}
