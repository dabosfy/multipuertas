import {Component, OnInit, Renderer2, ViewChild} from '@angular/core';
import {Gate} from "../interfaces/gate";

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
    @ViewChild('header', {static: true}) header: any;
    gateMerikList: Array<Gate> = [];
    gateErrekaList: Array<Gate> = [];
    gateLiftMasterList: Array<Gate> = [];

    constructor(
        private renderer: Renderer2
    ) {
    }

    ngOnInit(): void {
        this.setup();
    }

    setup(): void {
        this.gateMerikList = [
            {
                name: 'Merik mod. 511',
                image: '/assets/images/gate-merik-1.png'
            },
            {
                name: 'Merik mod. 411W',
                image: '/assets/images/gate-merik-1.png'
            },
            {
                name: 'Merik mod. 711',
                image: '/assets/images/gate-merik-1.png'
            },
            {
                name: 'Motor de pistones G Bat 300',
                image: '/assets/images/gate-merik-1.png'
            }
        ];

        this.gateErrekaList = [
            {
                name: 'Accionador electromecanico Cat-800',
                image: '/assets/images/gate-merik-1.png'
            },
            {
                name: 'Accionador electromecanico Kairos a 24V',
                image: '/assets/images/gate-merik-1.png'
            },
            {
                name: 'Accionador electromecanico coaxial Ergos para cortina',
                image: '/assets/images/gate-merik-1.png'
            }
        ];

        this.gateLiftMasterList = [
            {
                name: 'Lift-Master mod. 1210E',
                image: '/assets/images/gate-merik-1.png'
            },
            {
                name: 'Lift-Master mod. 7511W a 24V',
                image: '/assets/images/gate-merik-1.png'
            },
            {
                name: 'Motor de pistones lift-master mod. LA-350 a 24V',
                image: '/assets/images/gate-merik-1.png'
            }
        ];
    }


    public listenerScroll(event: CustomEvent): void {
        if (event.detail.scrollTop > 0) {
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
