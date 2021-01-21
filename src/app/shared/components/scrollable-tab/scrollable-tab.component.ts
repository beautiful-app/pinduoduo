import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ScrollMenu} from "../../entity/top-menu.vo";

@Component({
    selector: 'app-scrollable-tab',
    templateUrl: './scrollable-tab.component.html',
    styleUrls: ['./scrollable-tab.component.scss']
})
export class ScrollableTabComponent implements OnInit {
    
    title = 'pinduoduo';
    @Input() scrollMenu: ScrollMenu[] = [];
    @Output() tabSelected = new EventEmitter();
    selectedIndex = -1;
    
    ngOnInit(): void {
    }
    
    handleSelected(index: number) {
        this.selectedIndex = index;
        this.tabSelected.emit(this.scrollMenu[this.selectedIndex]);
    }
}
