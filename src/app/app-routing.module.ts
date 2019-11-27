import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent} from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { ArticleComponent, ArticleComponent1, ArticleComponent2, ArticleComponent3, ArticleComponent4, ArticleComponent5, ArticleComponent6 } from './article-list/article-list.component';
import { ListingDialogComponent, ListingDialogComponent1, ListingDialogComponent2, ListingDialogComponent5, ListingDialogComponent4, ListingDialogComponent3, ListingDialogComponent7, ListingDialogComponent6, ListingDialogComponent8, ListingDialogComponent9, ListingDialogComponent11, ListingDialogComponent10, ListingDialogComponent12, ListingDialogComponent13, ListingDialogComponent14 } from './listing-dialog/listing-dialog.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



const routes: Routes = [
  { path: '',   redirectTo: '/list/1', pathMatch: 'full' },
  {path:'list/1', component: ArticleComponent, children: [
    {path:'1', component: ListingDialogComponent},
    {path:'2', component: ListingDialogComponent1},
    {path:'3', component: ListingDialogComponent2},
    {path:'4', component: ListingDialogComponent3},
    {path:'5', component: ListingDialogComponent4},
    {path:'6', component: ListingDialogComponent5},
    {path:'7', component: ListingDialogComponent6},
    {path:'8', component: ListingDialogComponent7},
    {path:'9', component: ListingDialogComponent8},
    {path:'10', component: ListingDialogComponent9},
    {path:'11', component: ListingDialogComponent10},
    {path:'12', component: ListingDialogComponent11},
    {path:'13', component: ListingDialogComponent12},
    {path:'14', component: ListingDialogComponent13},
  ]},
  {path:'list/2', component: ArticleComponent1,
  children: [
    {path:'1', component: ListingDialogComponent},
    {path:'2', component: ListingDialogComponent1},
    {path:'3', component: ListingDialogComponent2},
    {path:'4', component: ListingDialogComponent3},
    {path:'5', component: ListingDialogComponent4},
    {path:'6', component: ListingDialogComponent5},
    {path:'7', component: ListingDialogComponent6},
    {path:'8', component: ListingDialogComponent7},
    {path:'9', component: ListingDialogComponent8},
    {path:'10', component: ListingDialogComponent9},
    {path:'11', component: ListingDialogComponent10},
    {path:'12', component: ListingDialogComponent11},
    {path:'13', component: ListingDialogComponent12},
    {path:'14', component: ListingDialogComponent13},
  ]},
  {path:'list/3', component: ArticleComponent2,
  children: [
    {path:'1', component: ListingDialogComponent},
    {path:'2', component: ListingDialogComponent1},
    {path:'3', component: ListingDialogComponent2},
    {path:'4', component: ListingDialogComponent3},
    {path:'5', component: ListingDialogComponent4},
    {path:'6', component: ListingDialogComponent5},
    {path:'7', component: ListingDialogComponent6},
    {path:'8', component: ListingDialogComponent7},
    {path:'9', component: ListingDialogComponent8},
    {path:'10', component: ListingDialogComponent9},
    {path:'11', component: ListingDialogComponent10},
    {path:'12', component: ListingDialogComponent11},
    {path:'13', component: ListingDialogComponent12},
    {path:'14', component: ListingDialogComponent13},
  ]},
  {path:'list/4', component: ArticleComponent3,
  children: [
    {path:'1', component: ListingDialogComponent},
    {path:'2', component: ListingDialogComponent1},
    {path:'3', component: ListingDialogComponent2},
    {path:'4', component: ListingDialogComponent3},
    {path:'5', component: ListingDialogComponent4},
    {path:'6', component: ListingDialogComponent5},
    {path:'7', component: ListingDialogComponent6},
    {path:'8', component: ListingDialogComponent7},
    {path:'9', component: ListingDialogComponent8},
    {path:'10', component: ListingDialogComponent9},
    {path:'11', component: ListingDialogComponent10},
    {path:'12', component: ListingDialogComponent11},
    {path:'13', component: ListingDialogComponent12},
    {path:'14', component: ListingDialogComponent13},
  ]},
  {path:'list/5', component: ArticleComponent4,
  children: [
    {path:'1', component: ListingDialogComponent},
    {path:'2', component: ListingDialogComponent1},
    {path:'3', component: ListingDialogComponent2},
    {path:'4', component: ListingDialogComponent3},
    {path:'5', component: ListingDialogComponent4},
    {path:'6', component: ListingDialogComponent5},
    {path:'7', component: ListingDialogComponent6},
    {path:'8', component: ListingDialogComponent7},
    {path:'9', component: ListingDialogComponent8},
    {path:'10', component: ListingDialogComponent9},
    {path:'11', component: ListingDialogComponent10},
    {path:'12', component: ListingDialogComponent11},
    {path:'13', component: ListingDialogComponent12},
    {path:'14', component: ListingDialogComponent13},
  ]},
  {path:'list/6', component: ArticleComponent5,
  children: [
    {path:'1', component: ListingDialogComponent},
    {path:'2', component: ListingDialogComponent1},
    {path:'3', component: ListingDialogComponent2},
    {path:'4', component: ListingDialogComponent3},
    {path:'5', component: ListingDialogComponent4},
    {path:'6', component: ListingDialogComponent5},
    {path:'7', component: ListingDialogComponent6},
    {path:'8', component: ListingDialogComponent7},
    {path:'9', component: ListingDialogComponent8},
    {path:'10', component: ListingDialogComponent9},
    {path:'11', component: ListingDialogComponent10},
    {path:'12', component: ListingDialogComponent11},
    {path:'13', component: ListingDialogComponent12},
    {path:'14', component: ListingDialogComponent13},
  ]},
  {path:'list/7', component: ArticleComponent6,
  children: [
    {path:'1', component: ListingDialogComponent},
    {path:'2', component: ListingDialogComponent1},
    {path:'3', component: ListingDialogComponent2},
    {path:'4', component: ListingDialogComponent3},
    {path:'5', component: ListingDialogComponent4},
    {path:'6', component: ListingDialogComponent5},
    {path:'7', component: ListingDialogComponent6},
    {path:'8', component: ListingDialogComponent7},
    {path:'9', component: ListingDialogComponent8},
    {path:'10', component: ListingDialogComponent9},
    {path:'11', component: ListingDialogComponent10},
    {path:'12', component: ListingDialogComponent11},
    {path:'13', component: ListingDialogComponent12},
    {path:'14', component: ListingDialogComponent13},
  ]},
];


@NgModule({
  declarations: [AppComponent],
  imports: [RouterModule.forRoot(routes), BrowserModule, FormsModule, NgbModule],
  exports: [RouterModule],
  entryComponents: [ListingDialogComponent, ListingDialogComponent1, ListingDialogComponent2, ListingDialogComponent3, ListingDialogComponent4, ListingDialogComponent5, ListingDialogComponent6, ListingDialogComponent7, ListingDialogComponent8, ListingDialogComponent9, ListingDialogComponent10, ListingDialogComponent11, ListingDialogComponent12, ListingDialogComponent13, ListingDialogComponent14
  ],
  bootstrap: [ArticleComponent, ArticleComponent1, ArticleComponent2, ArticleComponent3, ArticleComponent4, ArticleComponent5, ArticleComponent6, ListingDialogComponent, ListingDialogComponent1, ListingDialogComponent2, ListingDialogComponent3, ListingDialogComponent4, ListingDialogComponent5, ListingDialogComponent6, ListingDialogComponent7, ListingDialogComponent8, ListingDialogComponent9, ListingDialogComponent10, ListingDialogComponent11, ListingDialogComponent12, ListingDialogComponent13, ListingDialogComponent14]
})
export class AppRoutingModule { }
export const routingComponents = [ArticleComponent, ArticleComponent1, ArticleComponent2, ArticleComponent3, ArticleComponent4, ArticleComponent5, ArticleComponent6, ListingDialogComponent, ListingDialogComponent1, ListingDialogComponent2, ListingDialogComponent3, ListingDialogComponent4, ListingDialogComponent5, ListingDialogComponent6, ListingDialogComponent7, ListingDialogComponent8, ListingDialogComponent9, ListingDialogComponent10, ListingDialogComponent11, ListingDialogComponent12, ListingDialogComponent13, ListingDialogComponent14]
