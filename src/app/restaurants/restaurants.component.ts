import { Component } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent  {
	title = 'MEAN4 Restaurants';
	restaurants: Array<any>;

  // Dependency injection of data service through a Constructor
  constructor(private _dataService: DataService) {

  	this._dataService.getRestaurants()
  		.subscribe(res => this.restaurants = res)

  }
}
