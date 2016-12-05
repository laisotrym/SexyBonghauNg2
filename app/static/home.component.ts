//import dependency
import { Component } from '@angular/core';
import {Http} from "@angular/http";
import {SexyBongService} from "../service/sexybong.service";

//decorator @Component({})
@Component({
    templateUrl: 'app/static/home.component.html',
    providers: [SexyBongService] // _service = new SexyBongService()
})

//view controller
export class HomeComponent {
    //collection of sexybongs
    sexybongs: any[];

    constructor(private _http: Http, public _service: SexyBongService){
    }

    ngOnInit() : void {
        //display iframe
        this._service.log();

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
