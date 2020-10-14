import {Component} from '@angular/core';
import {ScrollMenu} from "../shared/entity/top-menu.vo";
import {SCROLL_MEUNS} from "../shared/entity/const/scroll-menu.const";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'pinduoduo';
    scrollMenu: ScrollMenu[] = SCROLL_MEUNS;
    
    handleSelected(scrollMenu: ScrollMenu) {
        console.log(scrollMenu);
    }
}
