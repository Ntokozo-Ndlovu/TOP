import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeSearchComponent } from './home-search/home-search.component';


const routes:Routes =[
  {path:'home',
  component: HomeSearchComponent
}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports:[RouterModule]
})
export class HomeRoutingModule { }
