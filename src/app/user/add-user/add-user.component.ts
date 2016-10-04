import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
	public userName:String;
	public nickName:String;
	public alerts:Array<Object> = [];

  	constructor() { }

  	ngOnInit() {
  	}

  	public submitForm(f){
  		if(f.form.valid){
  			console.log(f.form.value);
  			this.alerts.push({msg: 'Add User Success!', type: 'success', dismissOnTimeout:1000});
  		}else{
  			this.alerts.push({msg: 'Please check the input...', type: 'danger', dismissOnTimeout:1000});
  		}
  	}

  	public addUser(){

  	}
}