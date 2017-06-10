import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { SearchBox } from './Views/SearchBox/search-box.component';
import { TabPanel } from './Views/tab/tab.component';
import { Header } from './Views/PageHeader/header.component';
import { DataService } from './Services/data.service';
import { SessionStorage } from './Services/localStorage.service';
import { appRoutes } from "./router-config";
import { LoginComponent } from "./Views/Login/login.component";
import { BuildingComponent } from "./Views/Building/EditBuilding/building.component";
import { SuperAdminDashboard } from "./Views/SuperAdminDashboard/superadmindashboard.component";
import { AddBuildingComponent } from "./Views/Building/AddBuilding/addbuilding.component";
import { AddUniversityComponent } from "./Views/University/AddUniversity/university.component";
@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule, RouterModule.forRoot(appRoutes)],
    providers: [DataService, SessionStorage],
    declarations: [AppComponent, SearchBox, TabPanel, Header, LoginComponent, BuildingComponent, SuperAdminDashboard, AddBuildingComponent, AddUniversityComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
