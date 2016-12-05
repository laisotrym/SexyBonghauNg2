//java, ...
import { Component } from '@angular/core';

//model
import { SexyBong } from '../model/SexyBong';

//service
import { SexyBongService } from '../service/sexybong.service';
import {ActivatedRoute} from "@angular/router";

//decorator
@Component({
    templateUrl: 'app/sexybong/sexybong.detail.html',
    //templateUrl: 'test.html',
})

/**
 * public class
 */
export class SexyBongDetail {
    pageTitle: string = 'SexyBong Detail';
    public errorMessage: string;

    //global variable (han che)
   currentSexy: SexyBong; //access modifier (public, private, default)

    //aggregration
    //DI
    constructor(private _service: SexyBongService, private _route: ActivatedRoute,) {
    }

    //hook life cycle
    ngOnInit(): void {
        //prepare data
        let sexybongs : SexyBong[] = this._service.sexybongs;
        console.log(sexybongs);

        //search all list
        //id=1, search this.sexybongs to see id=1
        let id = this._route.snapshot.params['id'];
        console.log(id);

        for (let index=0; index < sexybongs.length; index++){
            let sexybong = sexybongs[index];

            //check id
            if(id == sexybong.id){
                this.currentSexy = sexybong;
                return;//if equal, return true
            }
        }

    }

    ngAfterViewInit(){
        //animation, logic
    }

}
