import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

import { SexyBong } from '../model/SexyBong';

//DI
@Injectable()
export class SexyBongService {
    /**
     * global variable
     * @type {string}
     * @private
     */
    private _sexybongUrl = 'mock_data/json/sexies.json';
    public sexybongs: SexyBong[];

    constructor(private _http: Http) {}

    //logic
    getSexyBong(): Observable<SexyBong[]> {
        return this._http.get(this._sexybongUrl)
        //ES6
        //convert Collection[e1] -> Collection[e2]
        //reactive programming
        //callback
        //.map(function(response){
        //    return <IProduct[]> response.json();
        //})
            .map((response: Response) => <SexyBong[]> response.json())
            .catch(this.handleError);
    }

    log(){
        console.log("I'm comming from SexyService");
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

}
