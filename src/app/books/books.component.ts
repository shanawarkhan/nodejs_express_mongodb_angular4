import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
	title = 'MEAN4 Books';
	books: Array<any>;

  // Dependency injection of data service through a Constructor
  constructor(private _dataService: DataService) {

  	this._dataService.getBooks()
  		.subscribe(res => this.books = res)

  }
}

