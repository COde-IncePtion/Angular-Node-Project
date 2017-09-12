import { AuthService } from './auth.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit,NgModule } from '@angular/core';


@Component({
    selector:"app-signip",
    templateUrl:"./signup.component.html",
})
export class SignupComponent{
    
    constructor(private authService: AuthService) { 
        
    }

    onSubmit(formObj: NgForm){
        // console.log(formObj);
        this.authService.userSignup(formObj.value)
        .subscribe(
            result => console.log(result),
            error => console.log(error)
    );
        formObj.resetForm();
    }

    ngOnInit() {
    }

}