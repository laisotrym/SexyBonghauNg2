import {Component} from '@angular/core';

@Component({
    selector: 'menu',
    template: `
        <ul class="listItemMnuMain">
            <li><a [routerLink]="['/']">
                <img style="position: relative; top: 5px;" src="assets/images/home.png" 
                alt=""></a></li>
            <li><a [routerLink]="['/sexybongs']">Sexybongs</a></li>
            <li><a href="./events">Events</a></li>
        </ul>
     `
})


export class Menu {
}
