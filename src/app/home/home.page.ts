import {Component, Renderer2, ViewChild} from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {
    @ViewChild('header', {static: true}) header: any;

    constructor(
        private renderer: Renderer2
    ) {
    }


    public listenerScroll(event: CustomEvent): void {
        if(event.detail.scrollTop > 0) {
            this.renderer.addClass(this.header.el, 'contrast');
        } else {
            this.renderer.removeClass(this.header.el, 'contrast');
        }
    }

    public scrollTo($element: any) {
        $element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest'
        });
    }
}
