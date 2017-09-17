import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'Mean4plus app';
  books: Array<any>;

  // Dependency injection of data service through a Constructor
  constructor(private _dataService: DataService) {

  	this._dataService.getBooks()
  		.subscribe(res => this.books = res)

  }
}
