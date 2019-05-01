import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { HttpModule } from '@angular/http';
import { DataService } from './data.service';
import { BooksComponent } from './books/books.component';
import { AppRoutingModule } from './app-routing.module';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { AutomobilesComponent } from './automobiles/automobiles.component';

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    RestaurantsComponent,
    AutomobilesComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
