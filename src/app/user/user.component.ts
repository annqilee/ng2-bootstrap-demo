import { Component, OnInit } from '@angular/core';
import { AccordionModule } from 'ng2-bootstrap/ng2-bootstrap';
import { PaginationModule } from 'ng2-bootstrap/ng2-bootstrap';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  	public status:Object = {
    	open: true,
  	};

  	public userTypes:any=[
  		{id:'1',name:'userType1'},
  		{id:'2',name:'userType2'},
  		{id:'3',name:'userType3'},
  		{id:'4',name:'userType4'},
  		{id:'5',name:'userType5'},
  		{id:'6',name:'userType6'},
  		{id:'7',name:'userType7'},
  		{id:'8',name:'userType8'},
  		{id:'9',name:'userType9'},
  		{id:'10',name:'userType10'}
  	];

  	public users:any=[
  		{index:1,userName:'momo',nickName:'大漠穷秋',regTime:'2016-10-02 22:31',lastLoginTime:'2016-10-02 22:31'},
  		{index:2,userName:'momo',nickName:'大漠穷秋',regTime:'2016-10-02 22:31',lastLoginTime:'2016-10-02 22:31'},
  		{index:3,userName:'momo',nickName:'大漠穷秋',regTime:'2016-10-02 22:31',lastLoginTime:'2016-10-02 22:31'},
  		{index:4,userName:'momo',nickName:'大漠穷秋',regTime:'2016-10-02 22:31',lastLoginTime:'2016-10-02 22:31'},
  		{index:5,userName:'momo',nickName:'大漠穷秋',regTime:'2016-10-02 22:31',lastLoginTime:'2016-10-02 22:31'},
  		{index:6,userName:'momo',nickName:'大漠穷秋',regTime:'2016-10-02 22:31',lastLoginTime:'2016-10-02 22:31'},
  		{index:7,userName:'momo',nickName:'大漠穷秋',regTime:'2016-10-02 22:31',lastLoginTime:'2016-10-02 22:31'},
  		{index:8,userName:'momo',nickName:'大漠穷秋',regTime:'2016-10-02 22:31',lastLoginTime:'2016-10-02 22:31'},
  		{index:9,userName:'momo',nickName:'大漠穷秋',regTime:'2016-10-02 22:31',lastLoginTime:'2016-10-02 22:31'},
  		{index:10,userName:'momo',nickName:'大漠穷秋',regTime:'2016-10-02 22:31',lastLoginTime:'2016-10-02 22:31'}
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
	  console.log('Page changed to: ' + event.page);
	  console.log('Number items per page: ' + event.itemsPerPage);
	};

  	getUserByType(typeId){
  		console.log("Get users by type:"+typeId);
  	}
}
