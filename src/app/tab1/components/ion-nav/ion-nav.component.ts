import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { IonNavSubComponent } from '../ion-nav-sub';

@Component({
    selector: 'app-ion-nav',
    templateUrl: './ion-nav.component.html',
    styleUrls: ['./ion-nav.component.scss'],
})
export class IonNavComponent implements OnInit {

    public techs: any[];
    public tech: any;

    constructor(public navController: NavController) {
        this.techs = [
            {
                title: 'Angular',
                icon: 'angular',
                // tslint:disable-next-line:max-line-length
                description: 'A powerful Javascript framework for building single page apps. Angular is open source, and maintained by Google.',
                color: '#E63135'
            },
            {
                title: 'CSS3',
                icon: 'css3',
                description: 'The latest version of cascading stylesheets - the styling language of the web!',
                color: '#0CA9EA'
            },
            {
                title: 'HTML5',
                icon: 'html5',
                description: 'The latest version of the web\'s markup language.',
                color: '#F46529'
            },
            {
                title: 'JavaScript',
                icon: 'javascript',
                description: 'One of the most popular programming languages on the Web!',
                color: '#FFD439'
            },
            {
                title: 'Sass',
                icon: 'sass',
                description: 'Syntactically Awesome Stylesheets - a mature, stable, and powerful professional grade CSS extension.',
                color: '#CE6296'
            },
            {
                title: 'NodeJS',
                icon: 'nodejs',
                description: 'An open-source, cross-platform runtime environment for developing server-side Web applications.',
                color: '#78BD43'
            },
            {
                title: 'Python',
                icon: 'python',
                description: 'A clear and powerful object-oriented programming language!',
                color: '#3575AC'
            },
            {
                title: 'Markdown',
                icon: 'markdown',
                description: 'A super simple way to add formatting like headers, bold, bulleted lists, and so on to plain text.',
                color: '#412159'
            },
            {
                title: 'Tux',
                icon: 'tux',
                description: 'The official mascot of the Linux kernel!',
                color: '#000'
            },
        ];
    }

    ngOnInit() { }

    public showDetail(title) {
        // tslint:disable-next-line:no-shadowed-variable
        this.tech = this.techs.find(tech => tech.title === title);
        console.log(this.tech);
        const nav = document.querySelector('ion-nav');
        // this.navController.push(IonNavSubComponent, {});
        nav.push(IonNavSubComponent, { tech: this.tech , nav});
    }

}
