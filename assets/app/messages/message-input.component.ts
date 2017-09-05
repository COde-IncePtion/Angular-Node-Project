import { Message } from './message.model';
import { MessageService } from './message.service';
import { Component } from '@angular/core';
import { NgForm } from "@angular/forms";

@Component({
    selector:"app-message-input",
    templateUrl:"./message-input.component.html",
})

export class MessageInputComponent{
    constructor(private messageService: MessageService){
    }

    onSubmit(formObj: NgForm){
        this.messageService.addMessage(new Message(formObj.value.message,"Rupinder"));
        // console.log(formObj.value.message);
        formObj.resetForm();
    }
}