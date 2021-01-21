import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ImageSliderComponent} from "./components/image-slider/image-slider.component";
import {ScrollableTabComponent} from "./components/scrollable-tab/scrollable-tab.component";
import {FormsModule} from "@angular/forms";


@NgModule({
    declarations: [ImageSliderComponent, ScrollableTabComponent],
    imports: [
        CommonModule,
        FormsModule,
    
    ],
    exports: [
        CommonModule,
        FormsModule,
        ImageSliderComponent,
        ScrollableTabComponent,
    ]
})
export class SharedModule {
}
