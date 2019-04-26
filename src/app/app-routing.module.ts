import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } 		from './books/books.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';

const routes: Routes = [
  { path: 'books', component: BooksComponent },
  { path: 'restaurants', component: RestaurantsComponent }
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
 	exports: [ RouterModule ]
})
export class AppRoutingModule {}