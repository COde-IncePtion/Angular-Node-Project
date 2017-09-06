import { MessageService } from './message.service';
import { Message } from './message.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-message',
    templateUrl: './message.component.html',
    styles:[`
        .author{
            text-align: left;
            display: inline-block;
            width: 80%;
        }
        .config{
            text-align: right;
            display: inline-block;
            width: 19%;
        }
    `]
})

export class MessageComponent implements OnInit {
    @Input() message: Message;
    constructor(private messageService: MessageService){

    }

    onEdit(){

    }

    onDelete(){
        this.messageService.deleteMessage(this.message);
    }

    ngOnInit() {
    }
    
}