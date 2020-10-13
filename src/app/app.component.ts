import {Component} from '@angular/core';
import {TopMenu} from "../shared/entity/top-menu.vo";
import {TOP_MEUNS} from "../shared/entity/const/top-menu.const";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'pinduoduo';
    topMenus: TopMenu[] = TOP_MEUNS;
}
