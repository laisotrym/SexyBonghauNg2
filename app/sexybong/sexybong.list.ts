//java, ...
import { Component } from '@angular/core';

//model
import { SexyBong } from '../model/SexyBong';

//service
import { SexyBongService } from '../service/sexybong.service';

//decorator
@Component({
    templateUrl: 'app/sexybong/sexybong.list.html',
    //templateUrl: 'test.html',
})

/**
 * public class
 */
export class SexyBongList {
    pageTitle: string = 'Product List';
    widthImage: number = 50;
    showInfo: boolean = true;
    filterBy: string = "Trang Phi";

    public errorMessage: string;

    sexybongs: SexyBong[]; //access modifier (public, private, default)

    //aggregration
    //DI
    constructor(private _service: SexyBongService) {
    }

    //hook life cycle
    ngOnInit(): void {
        this._service.getSexyBong()
        //observable
        //arrow function
            .subscribe(sexybongs => {
                    this.sexybongs = sexybongs;
                    this._service.sexybongs = sexybongs;

                    console.log(this.sexybongs);
                },
                error => this.errorMessage = <any>error,
                () => {
                    console.log("Complete ok bebi");
                });
    }

    fiveHundredInfo(): void {
        this.showInfo = !this.showInfo;
    }

}
