import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { SearchResult } from '../models';
import { GatewayService } from './gateway.service';
import { SearchResponse } from '../interface/http';

@Injectable({
  providedIn: 'root'
})
export class MainSearchService implements OnDestroy {
  searchResults:BehaviorSubject<SearchResult[]>= new BehaviorSubject<SearchResult[]>([]);
  $searchObsevables:Subscription[] = [];
  constructor(private gateway:GatewayService) { }

  public search(searchQuery:string){
    let $searchObs = this.gateway.get<SearchResponse>(searchQuery).subscribe(response=>{
      this.searchResults.next(response.searchResults);
    })
    this.$searchObsevables.push($searchObs);
  }

  ngOnDestroy(): void {
      console.log('Service destroyed')
      this.$searchObsevables.forEach(observable=>{
        observable.unsubscribe();
      })
  }

}
