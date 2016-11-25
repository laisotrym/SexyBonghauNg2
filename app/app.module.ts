import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent }  from './app.component';
import { AppMenuComponent }  from './appmenu.component';

import { HomeComponent } from './static/home.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: '**', redirectTo: '', pathMatch: 'full' }
    ]),
  ],
  declarations: [
    AppMenuComponent,
    AppComponent,
    HomeComponent,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
