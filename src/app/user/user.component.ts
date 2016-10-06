import { Component, OnInit } from '@angular/core';
import { AccordionModule } from 'ng2-bootstrap/ng2-bootstrap';
import { PaginationModule } from 'ng2-bootstrap/ng2-bootstrap';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  	public totalItems:number = 64;
	  public currentPage:number = 4;
	 
	  public maxSize:number = 5;
	  public bigTotalItems:number = 175;
	  public bigCurrentPage:number = 1;
	  public users:any;

	  constructor() {
      //Get test data from localStorage,data was defined in app.component.ts
      this.users=JSON.parse(window.localStorage.getItem("users"));
      console.log(this.users);
    }

    ngOnInit() {
  	}

	  public setPage(pageNo:number):void {
	     this.currentPage = pageNo;
	  };
	 
	  public pageChanged(event:any):void {
      console.log(event);
	  };

    //Search user
    public searchUser(input){
      console.log(input.value);
    }

    public resetSearch(input){
      input.value="";
    }

    public delUser(userId){
      console.log(userId);
      let resultIndex=-1;
      for(let i=0;i<this.users.length;i++){
        let user=this.users[i];
        if(user&&user.userId==userId){
          resultIndex=i;
          break;
        }
      }
      if(resultIndex!=-1){
        this.users.splice(resultIndex,1);
        window.localStorage.setItem("users",JSON.stringify(this.users));
      }
    }

    public userDetail(userId){
      console.log(userId);
    }
}