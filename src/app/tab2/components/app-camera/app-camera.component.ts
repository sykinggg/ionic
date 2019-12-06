import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
    selector: 'app-app-camera',
    templateUrl: './app-camera.component.html',
    styleUrls: ['./app-camera.component.scss'],
})
export class AppCameraComponent implements OnInit {

    public base64Image: any;

    constructor(
        private camera: Camera
    ) { }

    ngOnInit() { }

    public defaultCamera() {
        const self = this;
        // https://ionicframework.com/docs/v3/native/camera/
        const options: CameraOptions = {
            quality: 100,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };

        this.camera.getPicture(options).then((imageData) => {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64 (DATA_URL):
            self.base64Image = 'data:image/jpeg;base64,' + imageData;
            alert(self.base64Image);
        }, (err) => {
            // Handle error
            alert(err);
        });
    }

}
