import {Component} from '@angular/core';
import {ScrollMenu} from "./shared/entity/top-menu.vo";
import {SCROLL_MEUNS} from "./shared/entity/const/scroll-menu.const";
import {ImageSliderBo} from "./shared/entity/image-slider.bo";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'pinduoduo';
    scrollMenu: ScrollMenu[] = SCROLL_MEUNS;
    imageSliders: ImageSliderBo[] = [
        {
            imgUrl: 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3892521478,1695688217&fm=26&gp=0.jpg',
            link: '',
            caption: '老虎'
        },
        {
            imgUrl: 'https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=151472226,3497652000&fm=26&gp=0.jpg',
            link: '',
            caption: '老虎'
        },
        {
            imgUrl: 'https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1689053532,4230915864&fm=26&gp=0.jpg',
            link: '',
            caption: '老虎'
        },
        {
            imgUrl: 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3437217665,1564280326&fm=26&gp=0.jpg',
            link: '',
            caption: '老虎'
        }
    ];
    
    handleSelected(scrollMenu: ScrollMenu) {
        console.log(scrollMenu);
    }
}
