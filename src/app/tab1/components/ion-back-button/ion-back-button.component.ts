import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-ion-back-button',
    templateUrl: './ion-back-button.component.html',
    styleUrls: ['./ion-back-button.component.scss'],
})
export class IonBackButtonComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

    public navigateForward() {
        customElements.define('nav-detail', class NavDetail extends HTMLElement {
            connectedCallback() {
                this.innerHTML = `
                <ion-header translucent>
                  <ion-toolbar>
                    <ion-buttons slot="start">
                      <ion-back-button defaultHref="/"></ion-back-button>
                    </ion-buttons>
                    <ion-title>Page Two</ion-title>
                  </ion-toolbar>
                </ion-header>
                <ion-content fullscreen class="ion-padding">
                  <p>Back-Button is displayed when there is history</p>
                </ion-content>
              `;
            }
        });
        const nav = document.querySelector('ion-nav');
        nav.push('nav-detail');
    }

}
