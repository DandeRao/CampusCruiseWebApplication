import { Injectable } from '@angular/core';
import { University } from "../Model/Univeristy";
import { Building } from "../Model/Building";
@Injectable()
export class SessionStorage {
    storeUserUniversity(content: University) {
     
        sessionStorage.setItem('user-university', JSON.stringify(content));
        
       // localStorage.setItem('user-university', JSON.stringify(content));
    }

    storeUserUniversities(content: University[]) {

        sessionStorage.setItem('user-universities', JSON.stringify(content));

        // localStorage.setItem('user-university', JSON.stringify(content));
    }

    retrieveUserUniversity() {
        let retrievedUniversities: University[] ;
        let storedToken: string = sessionStorage.getItem('user-university');
        //let storedToken: string = localStorage.getItem('user-university');
        retrievedUniversities = JSON.parse(storedToken);
        if (!storedToken) throw 'no university found';
        return storedToken;
    }

    retrieveUserUniversities() {
        let retrievedUniversities: University[];
        let storedToken: string = sessionStorage.getItem('user-universities');
        //let storedToken: string = localStorage.getItem('user-university');
        retrievedUniversities = JSON.parse(storedToken);
        if (!storedToken) throw 'no university found';
        return storedToken;
    }


    removeUserUniversity() {
        sessionStorage.removeItem('user-university');
        //localStorage.removeItem('user-university');
    }

    getBuildingFromStorageBeingEdited() {
       return sessionStorage.getItem('building');
    }

    setBuildingToStorageForEditing(building: Building) {
        sessionStorage.setItem('building', JSON.stringify(building));
    }

    setSessionUserName(userName) {
        sessionStorage.setItem('userName', userName);
    }
    getSessionUserName() {
        return sessionStorage.getItem('userName');
    }

    setSessionUniversityId(universityId) {
        console.log("setting university ID: " + universityId);
        sessionStorage.setItem('universityId', universityId);
    }

    getSessionUniversityId():number {
        return Number(sessionStorage.getItem('universityId'));
    }
    clearAllSessionItems() {
        sessionStorage.clear();
        console.log("Clearing session items");
    }



    addBuildingToUniversityInStorage(building: Building) {
        console.log("Entered local storage's add building");
        let university = <University>JSON.parse(this.retrieveUserUniversity());
        university.buildings.push(building);
        console.log(JSON.stringify(university));
        this.storeUserUniversity(university);
    }
}