import {AfterViewInit, Component, ElementRef, Input, OnDestroy, OnInit, Renderer2, ViewChild} from '@angular/core';
import {ImageSliderBo} from "../../entity/image-slider.bo";

@Component({
    selector: 'app-image-slider',
    templateUrl: './image-slider.component.html',
    styleUrls: ['./image-slider.component.scss']
})
export class ImageSliderComponent implements OnInit,AfterViewInit, OnDestroy {
    
    @Input() sliders: ImageSliderBo[] = [];
    @Input() sliderHeight = '160px';
    @Input() intervalBySeconds = 2;
    @ViewChild('imageSlider', {static: true}) imageSlide: ElementRef;
    private intervalId;
    private interval;
    selectedIndex: number = 0;
    
    constructor(private rd2: Renderer2) {
    }
    
    ngOnDestroy(): void {
        clearInterval(this.intervalId);
    }
    
    ngOnInit(): void {
        console.log('ngOnInit', this.imageSlide);
    }
    
    ngAfterViewInit() {
        let i = 0;
        this.intervalId = setInterval(_ => {
            this.rd2.setProperty(this.imageSlide.nativeElement, 'scrollLeft', ++this.selectedIndex % this.sliders.length * this.imageSlide.nativeElement.scrollWidth / this.sliders.length);
        }, this.intervalBySeconds * 1000);
    }
    
    handleScroll(ev) {
        const ratio = (ev.target.scrollLeft * this.sliders.length) / ev.target.scrollWidth;
        this.selectedIndex = Math.round(ratio);
    }
}
