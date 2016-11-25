//import dependency
import { Component } from '@angular/core';
import {Http} from "@angular/http";

//decorator @Component({})
@Component({
    templateUrl: 'app/static/home.component.html'
})

//view controller
export class HomeComponent {
    public pageTitle: string = 'Welcome';
    sexybongs: any[];

    constructor(private _http: Http){
    }

    ngOnInit() : void {
        //display iframe


        //get data top 3
        //ajax call
        this._http.get("mock_data/json/top3.json")
            .subscribe(
                (data) => {
                    this.sexybongs = data.json().result.data;
                }
            )
    }
}
