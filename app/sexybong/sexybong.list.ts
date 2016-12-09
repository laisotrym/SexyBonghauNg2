//java, ...
import { Component } from '@angular/core';

//model
import { SexyBong } from '../model/SexyBong';

//service
import { SexyBongService } from '../service/sexybong.service';
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";

//View Model
export interface Filter {
    filterBy: string;
    currentPage: number;
    perPage: number;
    totalPage: number;
}

declare var $:any;

//decorator
@Component({
    templateUrl: 'app/sexybong/sexybong.list.html',
    //templateUrl: 'test.html',
})

/**
 * View Controller
 */
export class SexyBongList {
    pageTitle: string = 'Sexy List';
    widthImage: number = 50;
    showInfo: boolean = true;

    //View Model
    filter: Filter = {
        filterBy: "Trang Phi",
        currentPage: 1,
        perPage: 2,
        totalPage: 2
    };

    public errorMessage: string;

    sexybongs: SexyBong[]; //access modifier (public, private, default)
    subscription: Subscription;

    fromNr: number = 0;
    toNr: number = 1;

    //aggregration
    //DI
    constructor(private _service: SexyBongService, private _router: ActivatedRoute) {
    }

    //hook life cycle
    ngOnInit(): void {
        //get page
        this.subscription = this._router.params.subscribe(
            (param: any) => {
                let pageNr = param['page'];
                if(pageNr){
                    this.filter.currentPage = pageNr;
                }
                console.log(this.filter.currentPage);
            }
        );

        this._service.getSexyBong()
            //observable
            //arrow function
            .subscribe(sexybongs => {
                    //get all sexybongs
                    this.sexybongs = sexybongs;
                    this._service.sexybongs = sexybongs;

                    console.log(this.sexybongs);
                },
                error => this.errorMessage = <any>error,
                () => {
                    console.log("Complete ok bebi");
                });
    }

    ngAfterViewInit() : void {
        //event using JS
        $('#btnList').click(
            () => {
                $('#mode-card').hide();
                $('#mode-list').show();
            }
        );

        $('#btnCard').click(
            () => {
                $('#mode-card').show();
                $('#mode-list').hide();
            }
        );

        //logic page
        if(this.sexybongs){
            let totalSexyBong: number = this.sexybongs.length;
            this.filter.totalPage = Math.ceil(totalSexyBong/this.filter.perPage);

            //page1 -> 0,1
            //page2 -> 2,3
            this.fromNr = (this.filter.currentPage - 1)*this.filter.perPage;
            this.toNr = this.fromNr + 1;
            console.log(this.fromNr);
            console.log(this.toNr);

            //logic (continue)
            //sexybongs -> sexybongs'
        }
    }

    ngOnDestroy() : void {
        //avoid memoryleak
        this.subscription.unsubscribe();
    }

    fiveHundredInfo(): void {
        this.showInfo = !this.showInfo;
    }

}
