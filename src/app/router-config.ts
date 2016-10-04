import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { AddUserComponent } from './user/add-user/add-user.component';
import { RoleComponent } from './role/role.component';
import { PermissionComponent } from './permission/permission.component';
import { SettingsComponent } from './settings/settings.component';
import { EchartsComponent } from './echarts/echarts.component';

export const routerConfig=[{
	path:'',
	children:[
		{
			path:'',
			component:HomeComponent
		},{
			path:'home',
			component:HomeComponent
		},{
			path:'user',
			children:[
				{
					path:'',
					component:UserComponent
				},
				{
					path:'adduser',
					component:AddUserComponent
				}
			]
		},{
			path:'role',
			component:RoleComponent
		},{
			path:'permission',
			component:PermissionComponent
		},{
			path:'settings',
			component:SettingsComponent
		},{
			path:'echarts',
			component:EchartsComponent
		},{
			path:'**',//fallback router must in the last
			component:HomeComponent
		}
	]
}];