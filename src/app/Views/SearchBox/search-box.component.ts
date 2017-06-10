import { Component } from "@angular/core"
@Component({
    selector: "search-box",
    templateUrl: "./search-box.html",
    styles: [`
        .btn-clear{
            background-color:red;
        }
        `]
})
export class SearchBox {
    text = "Type your text here"
    clear(input) {
        input.value = "cleared";
    }
}
