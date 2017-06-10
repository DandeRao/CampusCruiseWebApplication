import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { University } from "../Model/Univeristy"
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import "rxjs/add/observable/throw";
import { Observable } from 'rxjs/Observable';
import { Building } from "../Model/Building";
@Injectable()
export class DataService{
constructor(private http:Http){}

getUniversities() {
    console.log("Fetching data from server");
        return this.http.get("http://localhost:3097/universities")
        .map(response => <University[]>response.json());

}

getUniversity(universityId: number) {
    return this.http.get("http://localhost:3097/university/" + universityId)
            .map(response => <University[]>response.json());
}

loginUser(userName, password) {
    console.log("loggin in the user :" + userName);
    let body = {
        userName: userName,
        password: password
    };
    let headers = new Headers({ 'Content-Type': 'application/json' });
    console.log("user parameters: " + JSON.stringify(body));
    sessionStorage.setItem('userName', userName);
    //  return this.http.get("http://localhost:3097/login?userName=" + userName + "&password=" + password, JSON.stringify(userdetails))
    return this.http.post("http://localhost:3097/login", body,headers)    
        .map(response => <University[]>response.json())
        .catch((error: any) => {
            if (error.status === 401) {
                console.log("error caught");
                return Observable.throw('Login Failed');
            }
        });

}

    updateBuilding(oldBuilding: Building, newBuilding: Building) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let body = {
        "oldBuildingDetails": JSON.stringify({ "buildingName": oldBuilding.buildingName, "universityId": oldBuilding.universityId }),
        "newBuildingDetails": JSON.stringify({
            "buildingName": newBuilding.buildingName,
            "buildingCoordinates": newBuilding.buildingCoordinates,
            "tourPosition": newBuilding.tourPosition,
            
        })

    };
    console.log(body.oldBuildingDetails);
    console.log(body.newBuildingDetails);
    return this.http.post("http://localhost:3097/updateBuilding",body, headers);

}

    addBuilding(building: Building) {
        console.log("Data Service: Addding Building");
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let body = {
            "building": JSON.stringify({
                buildingName: building.buildingName,
                buildingCoordinates: building.buildingCoordinates,
                universityId: building.universityId
            })
        };
        return this.http.put("http://localhost:3097/addBuilding", body, headers)
            .map(response => response.json())
            .catch((error: any) => {
                console.log("building update failed");
                return Observable.throw('Update Failed');
            });

    }

    removeBuilding(building: Building) {

        console.log("Data Service: Remove Building");
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let body = {
            "building": JSON.stringify({
                buildingName: building.buildingName,
                buildingCoordinates: building.buildingCoordinates,
                universityId: building.universityId
            })
        };

        console.log(body);
        console.log("Making delete request");
        return this.http.post("http://localhost:3097/removeBuilding", body, headers);


    }


}