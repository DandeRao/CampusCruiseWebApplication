import { Component } from "@angular/core";
import { FormsModule} from '@angular/forms';
import { DataService } from '../../../Services/data.service'
import { RouterModule, Routes, Router } from '@angular/router';
import { University } from "../../../Model/Univeristy";
import { Building } from "../../../Model/Building";
import { SessionStorage } from "../../../Services/localStorage.service";
import { Location } from '@angular/common';
@Component({
    selector: "addBuilding",
    templateUrl: "./AddBuilding.html",
    styleUrls:['./AddBuilding.css']
})
export class AddBuildingComponent {
    
    building: Building;
    images: string[];
    ngOnInit() {
        this.building = new Building;
        this.building.universityId = this.storage.getSessionUniversityId();
        this.images = [];
    }
    constructor(
        private dataService: DataService,
        private router: Router,
        private storage: SessionStorage,
        private location: Location
    ) { }

    addBuilding() {
        console.log("Adding building");
        this.dataService.addBuilding(this.building)
            .subscribe(
            response => {
                console.log(JSON.stringify(response));
                this.storage.addBuildingToUniversityInStorage(<Building>response);
            }
            );    

    }

    addImage() {
        console.log("Add Image Called");
    }

    backClicked() {
        this.router.navigate(['/adminHome']);
    }

}
 