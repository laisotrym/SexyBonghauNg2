import { Component } from '@angular/core';

@Component({
    selector: 'sexybong',
    template: `
        <!-- header -->
        <div class="header">
            <div class="headerTop">
                <!-- logo -->
                <div class="logo">
                    <a href="/"><img src="http://images.tienphong.vn/hoahau/App_Themes/Version2/images/logo.png" alt=""></a>
                </div>
                <div class="clearfix"></div>
            </div>
                <!-- menu -->
            <menu id="mainMnu"></menu>
        </div>
        
        <!-- outlet -->
        <router-outlet></router-outlet>
        
        <!-- footer -->
        <div class="pad"></div>
        <div class="footer">
            <p>
                Tổng Biên tập: LÊ XUÂN SƠN<br>
                Địa chỉ: 15 Hồ Xuân Hương, Hà Nội.<br>
                Điện thoại: (84 4)9431250 - Fax: (84 4) 9436238<br>
                Email:online@baotienphong.com.vn<br>
                GPXB số 449/GP-BC cấp ngày 18/10/2004.
            </p>
            <p>
            Cơ quan chủ quản: Báo Tiền Phong, Cơ quan trung ương của Đoàn TNCS Hồ Chí Minh<br>
            Không sao chép thông tin từ website này khi chưa có sự đồng ý bằng văn bản của báo Tiền Phong
            </p>
            <a href="http://hoahau.tienphong.vn/hoa-hau-2016/" title="hoa hau 2016">hoa hau 2016</a>
        </div>
        <div class="clearfix"></div>
     `
})


export class AppComponent {
    //another prop
    //typescript prop: type
    slogan: string = "Only men make men happy";
}
