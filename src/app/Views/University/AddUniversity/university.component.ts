import { Component, EventEmitter, Output } from "@angular/core";
import { FormsModule} from '@angular/forms';
import { DataService } from '../../../Services/data.service'
import { RouterModule, Routes, Router } from '@angular/router';
import { University } from "../../../Model/Univeristy";
import { SessionStorage } from "../../../Services/localStorage.service"
@Component({
    selector: "addUniversity",
    templateUrl: "./university.html",
    styleUrls: ['./university.css']
})
export class AddUniversityComponent {
    
    university: University;
    userName: string;
    password: string;

    ngOnInit() {
        this.university = new University();
        this.userName = "";
        this.password = "";
    }

    constructor(
        private dataService: DataService,
        private router: Router,
        private storage: SessionStorage
    ) {}


    addUniversity() { }
 
}
 