import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent }  from './app.component';
import { Menu }  from './Menu';

import { HomeComponent } from './static/home.component';
import {SexyBongModule} from "./sexybong/sexybong.module";

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    SexyBongModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: '**', redirectTo: '', pathMatch: 'full' }
    ]),
  ],
  declarations: [
    Menu, //directive
    AppComponent, //bootstrap
    HomeComponent, //home directive/page
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
