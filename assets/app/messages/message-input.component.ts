import { Message } from './message.model';
import { MessageService } from './message.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";

@Component({
    selector:"app-message-input",
    templateUrl:"./message-input.component.html",
})

export class MessageInputComponent implements OnInit{
    message: Message;

    constructor(private messageService: MessageService){
    }

    onSubmit(formObj: NgForm){
        if(this.message){
            // we are editing
            this.message.content = formObj.value.message;
            this.messageService.updateMessage(this.message)
            .subscribe(
                result=>console.log(result)
            );
            this.message = null;
        }
        else{
            // we are creating a new message
            this.messageService.addMessage(new Message(formObj.value.message,null))
            .subscribe(
                data => console.log(data),
                error => console.error(error)
            );
        }
        // console.log(formObj.value.message);
        formObj.resetForm();
    }

    onClear(formObj: NgForm){
        formObj.resetForm();
        this.message = null;
    }

    ngOnInit(){
        this.messageService.messageIsEdit.subscribe(
            (message: Message) => this.message = message 
        );
    }
}