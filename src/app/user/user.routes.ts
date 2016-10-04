import {RouterModule} from "@angular/router";
import {UserComponent} from "./user.component";
import {AddUserComponent} from "./add-user/add-user.component";

const userRoutes = [
  	{
		path:'',
		component:UserComponent
	},
	{
		path:'adduser',
		component:AddUserComponent
	}
];
export default RouterModule.forChild(userRoutes);