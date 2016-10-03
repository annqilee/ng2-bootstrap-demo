import { Component, OnInit } from '@angular/core';
import { AccordionModule } from 'ng2-bootstrap/ng2-bootstrap';
import { PaginationModule } from 'ng2-bootstrap/ng2-bootstrap';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
    //test data
  	public users:any=[
  		{index:1,userId:1,userName:'momo',nickName:'大漠穷秋',regTime:'2016-10-02 22:31',lastLoginTime:'2016-10-02 22:31'},
  		{index:2,userId:2,userName:'momo',nickName:'大漠穷秋',regTime:'2016-10-02 22:31',lastLoginTime:'2016-10-02 22:31'},
  		{index:3,userId:3,userName:'momo',nickName:'大漠穷秋',regTime:'2016-10-02 22:31',lastLoginTime:'2016-10-02 22:31'},
  		{index:4,userId:4,userName:'momo',nickName:'大漠穷秋',regTime:'2016-10-02 22:31',lastLoginTime:'2016-10-02 22:31'},
  		{index:5,userId:5,userName:'momo',nickName:'大漠穷秋',regTime:'2016-10-02 22:31',lastLoginTime:'2016-10-02 22:31'},
  		{index:6,userId:6,userName:'momo',nickName:'大漠穷秋',regTime:'2016-10-02 22:31',lastLoginTime:'2016-10-02 22:31'},
  		{index:7,userId:7,userName:'momo',nickName:'大漠穷秋',regTime:'2016-10-02 22:31',lastLoginTime:'2016-10-02 22:31'},
  		{index:8,userId:8,userName:'momo',nickName:'大漠穷秋',regTime:'2016-10-02 22:31',lastLoginTime:'2016-10-02 22:31'},
  		{index:9,userId:9,userName:'momo',nickName:'大漠穷秋',regTime:'2016-10-02 22:31',lastLoginTime:'2016-10-02 22:31'},
  		{index:10,userId:10,userName:'momo',nickName:'大漠穷秋',regTime:'2016-10-02 22:31',lastLoginTime:'2016-10-02 22:31'}
  	];

  	public totalItems:number = 64;
	  public currentPage:number = 4;
	 
	  public maxSize:number = 5;
	  public bigTotalItems:number = 175;
	  public bigCurrentPage:number = 1;
	
	  constructor() { }

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
      }
    }

    public userDetail(userId){
      console.log(userId);
    }
}