import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { routerConfig } from './router-config';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { RoleComponent } from './role/role.component';
import { PermissionComponent } from './permission/permission.component';
import { SettingsComponent } from './settings/settings.component';
import { EchartsComponent } from './echarts/echarts.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    RoleComponent,
    PermissionComponent,
    SettingsComponent,
    EchartsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routerConfig)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
