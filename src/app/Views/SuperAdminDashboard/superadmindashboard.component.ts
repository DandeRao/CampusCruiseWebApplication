import { Component,EventEmitter,Output } from "@angular/core";
import { University } from '../../Model/Univeristy'
import { DataService } from '../../Services/data.service'
import { SessionStorage } from "../../Services/localStorage.service";
import { Building } from "../../Model/Building";
import { Router } from "@angular/router";
@Component({
    selector: "superAdminDashboard",
    templateUrl: "./super-admin-dashboard.html",
    styleUrls: ["./super-admin-dashboard.css"]
})
export class SuperAdminDashboard {
    universities: University[];
    @Output() editUniversity: EventEmitter<University> = new EventEmitter();
    constructor(
        private dataService: DataService,
        private storage: SessionStorage,
        private router:Router
    ) { }
    ngOnInit() {
       // this.dataService.getUniversities()
         //   .subscribe(response => this.universities = response );

        this.universities = <University[]>JSON.parse(this.storage.retrieveUserUniversities());
        this.universities = Array.isArray(this.universities) ? this.universities : [this.universities];

    }

    getaNamesWithoutSpaces(name) {
       let tempString= name;
        while (name.search(" ") >= 0) {
            tempString = name.replace(" ", "");
            name = tempString;
        }
        return tempString;
    }


}
