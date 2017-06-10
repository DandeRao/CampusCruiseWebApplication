import { Component } from "@angular/core";
import { University } from '../../Model/Univeristy'
import { DataService } from '../../Services/data.service'
import { SessionStorage } from "../../Services/localStorage.service";
import { Building } from "../../Model/Building";
import { Router } from "@angular/router";
@Component({
    selector: "tab",
    templateUrl: "./tab-component.html",
    styleUrls:["./tab.component.css"]
})
export class TabPanel {
    university: University;

    constructor(
        private dataService: DataService,
        private storage: SessionStorage,
        private router:Router
    ) { }
    ngOnInit() {
       // this.dataService.getUniversities()
         //   .subscribe(response => this.universities = response );

        this.university = <University>JSON.parse(this.storage.retrieveUserUniversity());
      //  this.universities = Array.isArray(this.universities) ? this.universities : [this.universities];

    }

    getaNamesWithoutSpaces(name) {
       let tempString= name;
        while (name.search(" ") >= 0) {
            tempString = name.replace(" ", "");
            name = tempString;
        }
        return tempString;
    }

    editBuilding(building: Building) {
        this.storage.setBuildingToStorageForEditing(building);
        this.router.navigate(['/building',building.buildingName]);
    }

    addBuilding() {
        this.router.navigate(['/addBuilding']);
    }

    removeBuilding(building: Building) {

        this.dataService.removeBuilding(building)
             .subscribe(
                response => {
                    console.log("response from server to remove building : "+JSON.stringify(response));
                  
                }
        );
        let university = this.university;
        console.log(university.buildings.length + " buildings in the university");
        for (var i = 0; i < university.buildings.length; i++) {
            if (university.buildings[i].buildingName == building.buildingName) {
                university.buildings.splice(i, 1);
            }

        }

        console.log("building removed now " + university.buildings.length + " buildings remain in the university");
        this.university = university;
        this.storage.storeUserUniversity(this.university);
        
    }

}
