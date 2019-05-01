import { Component} from '@angular/core';
import { DataService} from '../data.service';

@Component({
  selector: 'app-automobiles',
  templateUrl: './automobiles.component.html',
  styleUrls: ['./automobiles.component.css']
})
export class AutomobilesComponent {
	title = 'MEAN4 Automobiles';
	automobiles: Array<any>;

  // Dependency injection of data service through a Constructor
  constructor(private _dataService: DataService) {

  	this._dataService.getAutomobiles()
  		.subscribe(res => this.automobiles = res)

  }
}
