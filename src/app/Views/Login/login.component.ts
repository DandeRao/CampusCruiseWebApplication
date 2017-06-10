import { Component } from "@angular/core";
import { FormsModule} from '@angular/forms';
import { DataService } from '../../Services/data.service'
import { RouterModule, Routes, Router } from '@angular/router';
import { University } from "../../Model/Univeristy";
import { SessionStorage } from "../../Services/localStorage.service"
@Component({
    selector: "login",
    templateUrl: "./login.html",
    styleUrls:['./login.css']
})
export class LoginComponent {
    username: String;
    password: String;
    university: University;
    universities: University[];
    fromLocalStorage: University[];
    ngOnInit() {
        this.username = "";
        this.password = "";
     


    }

    constructor(
        private dataService: DataService,
        private router: Router,
        private storage: SessionStorage
    ) { }
    
    loginUser() {

        this.dataService.loginUser(this.username, this.password)
            .subscribe(
            response => {
                //this.loggedIn = <University[]>response;
                
                this.storage.setSessionUserName(this.username);
              
                if (this.username == "superAdmin") {
                    
                    this.universities = response;
                    this.storage.storeUserUniversities(this.universities);
                    this.storage.setSessionUniversityId(0);
                    this.router.navigate(['/superAdminDashboard']);
                                    }
                else {
                    this.university = response;
                    this.storage.storeUserUniversity(this.university);
                    var uid = JSON.parse(JSON.stringify(this.university));
                    this.storage.setSessionUniversityId(uid.universityId);
                    this.router.navigate(['/adminHome']);
                }
                
            },
            err => {
                console.log("Login Failed error processed");
                console.log(err);
                if (err === 'Login Failed') {
                    console.log("Login Failed");
                    alert("Login Failed");
                }
            }            
            );       
        
    }

    logoutUser() {
        this.storage.removeUserUniversity();
    }
}
 