import { NgForm } from '@angular/forms';
import { Component, OnInit,NgModule } from '@angular/core';


@Component({
    selector:"app-signip",
    templateUrl:"./signup.component.html"
})
export class SignupComponent{

    onSubmit(formObj: NgForm){
        // console.log(formObj);
        formObj.resetForm();
    }

    constructor() { }

    ngOnInit() {
    }

}