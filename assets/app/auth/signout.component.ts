import { Component } from '@angular/core';



@Component({
    selector:"app-signout",
    template:`
            <div class="col-md-8 col-md-offset-2">
                <button class="btn btn-danger" (click)="onSignout()" >Signout</button>
            </div>   
    `
})
export class SignoutComponent{
    onSignout(){

    }

}