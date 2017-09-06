import { NgForm } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
    selector:"app-signin",
    templateUrl:"./signin.component.html"
})

export class SigninComponent{

    onSubmit(formObj: NgForm){
        console.log(formObj);
        formObj.resetForm();
    }

}