import { Component } from "@angular/core"
import { SessionStorage } from "../../Services/localStorage.service";
import { Router } from "@angular/router";
import { DataService } from "../../Services/data.service";
@Component({
    selector: "header",
    templateUrl: "./header.html",
    styleUrls:['./header.css']
})
export class Header {
    constructor(
        private dataService: DataService,
        private storage: SessionStorage,
        private router: Router
    ) { }

    loginlogoutMessage: string;

    ngOnInit() {
        console.log("User Logged In: " + this.storage.getSessionUserName());
        if (this.storage.getSessionUserName()) {
            this.loginlogoutMessage = "Logout";
        }
        else {
            this.loginlogoutMessage = "Login";
        }
    }
    loginLogout() {
      
        if (this.loginlogoutMessage == "Login") {
            this.router.navigate([""]);
        }

        if (this.loginlogoutMessage == "Logout") {
            console.log("loggin out");
            this.storage.clearAllSessionItems();
            this.router.navigate([""]);
            this.loginlogoutMessage = "Login";
        }
        else {
            this.loginlogoutMessage="Login"
        }


    }
}
