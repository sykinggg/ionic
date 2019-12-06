import { Component, OnInit } from '@angular/core';
import { FileChooser } from '@ionic-native/file-chooser/ngx';

@Component({
    selector: 'app-app-chooser',
    templateUrl: './app-chooser.component.html',
    styleUrls: ['./app-chooser.component.scss'],
})
export class AppChooserComponent implements OnInit {

    public fileName: any;

    constructor(private fileChooser: FileChooser) { }

    ngOnInit() { }

    public getFile() {
        const self = this;
        this.fileChooser.open()
            .then(uri => {
                alert(uri);
                // alert(JSON.stringify(uri));
                self.fileName = uri;
            })
            .catch(e => {
                alert(e);
            });
    }

}
