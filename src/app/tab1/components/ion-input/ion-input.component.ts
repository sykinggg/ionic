import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
    selector: 'app-ion-input',
    templateUrl: './ion-input.component.html',
    styleUrls: ['./ion-input.component.scss'],
})
export class IonInputComponent implements OnInit {

    public processForm: FormGroup;

    constructor(private fb: FormBuilder) {
        // 动态表单初始化
        this.processForm = this.fb.group({
            // firstName: this.fb.control('firstName', [Validators.required, Validators.minLength(4), this.forbiddenNameValidator(/bob/i)]),
            // lastName: this.fb.control('lastName', [Validators.required, Validators.minLength(4)]),
            firstName: ['firstName',
                Validators.compose([
                    Validators.required,
                    Validators.minLength(4),
                    this.forbiddenNameValidator(/bob/i)
                ])
            ],
            lastName: ['lastName',
                Validators.compose([
                    Validators.required,
                    Validators.minLength(4)
                ]),
                this.asyncForbiddenNameValidator.bind(this)
            ]
        });
    }

    ngOnInit() { }

    // 异步验证
    public asyncForbiddenNameValidator(control: AbstractControl) {
        return of('123456' === control.value).pipe(
            map(result => result ? { invalid: true } : null)
        );
    }

    // 同步验证
    public forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
        return (control: AbstractControl): { [key: string]: any } | null => {
            const forbidden = nameRe.test(control.value);
            return forbidden ? { forbiddenName: { value: control.value } } : null;
        };
    }

    public processFormSubmit(event) {
        console.log('processForm', event);
        console.log(this.processForm.value);
        console.log(this.processForm.status);
    }

    public handleFirstNameValue(event) {
        console.log('handleFirstNameValue', event);
        console.log(event.target.value);
    }

    public handleLastNameValue(event) {
        console.log('handleLastNameValue', event);
        console.log(event.target.value);
    }

}
