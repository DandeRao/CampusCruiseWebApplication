import { RouterModule, Routes, Route } from '@angular/router';
import { TabPanel } from "./Views/tab/tab.component";
import { LoginComponent } from "./Views/Login/login.component";
import { BuildingComponent } from "./Views/Building/EditBuilding/building.component";
import { AddBuildingComponent } from "./Views/Building/AddBuilding/addbuilding.component";
import { SuperAdminDashboard } from "./Views/SuperAdminDashboard/superadmindashboard.component";
import { AddUniversityComponent } from "./Views/University/AddUniversity/university.component";

const adminHome: Route = {
    path: 'adminHome',
    component: TabPanel
};

const login: Route = {
    path: '',
    component: LoginComponent
};

const building: Route = {
    path: 'building/:buildingName',
    component: BuildingComponent
};

const superAdminDashboard: Route = {
    path: 'superAdminDashboard',
    component: SuperAdminDashboard
};

const addBuilding: Route ={
    path: 'addBuilding',
    component: AddBuildingComponent
};

const addUniversity: Route = {
    path: 'addUniversity',
    component: AddUniversityComponent

}
export const appRoutes: Routes = [adminHome, login, building, superAdminDashboard, addBuilding, addUniversity];
