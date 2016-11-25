import {Component} from '@angular/core';

@Component({
    selector: 'menu',
    template: `
        <div id="mainMnu">
            <ul class="listItemMnuMain">
            <li style="border: none">
            <a href="http://tienphong.vn">
            <img src="http://images.tienphong.vn/hoahau/App_Themes/Version2/images/logoftertphong.png" alt="" style="vertical-align: middle;"></a>
            </li>
            <li><a href="/">
            <img style="position: relative; top: 5px;" src="http://images.tienphong.vn/hoahau/App_Themes/Version2/images/iconhomeFter.png" alt=""></a></li>
            
            <li><a href="http://hoahau.tienphong.vn/hh-gioi-thieu/">Bonglau</a></li>
            
            <li><a href="http://hoahau.tienphong.vn/hh-tin-tuc/">Event</a></li>
            </ul>
        </div>
     `
})


export class AppMenuComponent {
    logo: string = "BCS ^^";
}
