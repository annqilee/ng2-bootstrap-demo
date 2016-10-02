import { Component, OnInit } from '@angular/core';
import { AccordionModule } from 'ng2-bootstrap/ng2-bootstrap';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  	constructor() { }

  	ngOnInit() {
  	}

  	public oneAtATime:boolean = true;
  	public items:Array<string> = ['Item 1', 'Item 2', 'Item 3'];
 
  	public status:Object = {
    	isFirstOpen: true,
    	isFirstDisabled: false
  	};
 
  	public groups:Array<any> = [
    	{
      		title: 'Dynamic Group Header - 1',
      		content: 'Dynamic Group Body - 1'
    	},
    	{
      		title: 'Dynamic Group Header - 2',
      		content: 'Dynamic Group Body - 2'
    	}
  	];
 
  	public addItem():void {
    	this.items.push(`Items ${this.items.length + 1}`);
  	}
}
