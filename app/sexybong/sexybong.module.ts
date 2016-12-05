import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';

import { SexyBongList } from './sexybong.list';
import { SexyBongDetail } from './sexybong.detail';

import { SexyBongService } from '../service/sexybong.service';
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";

@NgModule({
    declarations: [
        SexyBongList,
        SexyBongDetail //for Router -> <router-outlet>
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild([
            { path: 'sexybongs', component: SexyBongList },
            { path: 'sexybong/:id', //dynamic parameter
                component: SexyBongDetail },
        ])
    ],
    providers: [
        SexyBongService //_service = new SexyBongService, singleton
    ]
})

export class SexyBongModule {}
