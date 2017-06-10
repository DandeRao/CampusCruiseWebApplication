import { Component } from "@angular/core";
import { FormsModule} from '@angular/forms';
import { DataService } from '../../../Services/data.service'
import { RouterModule, Routes, Router } from '@angular/router';
import { University } from "../../../Model/Univeristy";
import { Building } from "../../../Model/Building";
import { SessionStorage } from "../../../Services/localStorage.service";
import { Location } from '@angular/common';
@Component({
    selector: "building",
    templateUrl: "./building.html",
    styleUrls:['./building.css']
})
export class BuildingComponent {
    
    building: Building;
    buildingForQuery: Building;
    images: FileList;

    //Copied Code
    loaded: boolean = false;
    imageLoaded: boolean = false;
    imageSrc: string = '';
    ngOnInit() {
        this.building = <Building>JSON.parse(this.storage.getBuildingFromStorageBeingEdited());
        this.buildingForQuery = <Building>JSON.parse(this.storage.getBuildingFromStorageBeingEdited());
    }

    constructor(
        private dataService: DataService,
        private router: Router,
        private storage: SessionStorage,
        private location: Location
    ) { }

    updateBuilding() {
        console.log("Updating building");
        this.dataService.updateBuilding(this.buildingForQuery, this.building)
            .subscribe(
            response => {
               
            }
            );    

    }

    addImage(e) {
        console.log("Adding Images..");
        var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];

        var pattern = /image-*/;
        var reader = new FileReader();
        this.loaded = false;

        reader.onload = this._handleReaderLoaded.bind(this);
        reader.readAsDataURL(file);


    }


    _handleReaderLoaded(e) {
        var reader = e.target;
        this.imageSrc = reader.result;
        this.loaded = true;
    }

    handleImageLoad() {
        this.imageLoaded = true;
        this.iconColor = this.overlayColor;
    }



    backClicked() {
       // this.location.back();
        this.router.navigate(['/adminHome']);
    }

}
 