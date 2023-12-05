import { Component,EventEmitter,Input,Output } from '@angular/core';
import { FormBuilder,FormControl,FormGroup } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { SearchQuery } from 'src/app/core/models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchController:FormControl;
  generatedSearchQuery:BehaviorSubject<SearchQuery[]> = new BehaviorSubject<SearchQuery[]>([]);//limit to 4

  @Output() searchQuery:EventEmitter<string> = new EventEmitter<string>();

  focus:boolean = false;
  searchQueryInputBackgroundDark:boolean = false;
 
  constructor(private formBuiler:FormBuilder, private router:Router){
    this.searchController = new FormControl("");
    //this.searchFormGroup = this.formBuiler.group({"search-query":["",]});
  }

  
  onSearchInput(event:any){
    if(event.target.value != ''){
      this.searchQueryInputBackgroundDark = !this.searchQueryInputBackgroundDark;
      this.generatedSearchQuery.next([{search:"University"},{search:"How to make money"},{search:"Everything that matter"}]);
      console.log('search query: ',this.searchController.value);
      this.searchQuery.emit(this.searchController.value)  
    }
    else {
      this.searchQueryInputBackgroundDark = !this.searchQueryInputBackgroundDark;   
      this.generatedSearchQuery.next([]);
      console.log("Event: ", this.searchController.value)
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
