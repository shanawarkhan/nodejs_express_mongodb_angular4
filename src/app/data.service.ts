import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class DataService {

  	result:any;

	// through dependency injection create instance of http
	constructor(private _http: Http) { }

  	// create a method for getting users from api endpoint
  	// then use map operator, we only want data from our api response object
  	getBooks() {
    return this._http.get("http://localhost:3000/api/books")
      .map(result => this.result = result.json().data);
  }
}
