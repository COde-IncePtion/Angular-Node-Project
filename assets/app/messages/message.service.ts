import { Message } from './message.model';
import { Injectable, EventEmitter } from "@angular/core";
import { Http, Response, Headers } from "@angular/http";

import 'rxjs/Rx';
import { Observable } from "rxjs/Observable";

@Injectable()
export class MessageService{
    private messages: Message[] = [];
    messageIsEdit = new EventEmitter<Message>();  // for updating operation

    constructor(private http: Http ){

    }

    addMessage(message: Message){
        // this.messages.push(message);    
        var body = JSON.stringify(message);
        var headers = new Headers({"Content-Type":"application/json"});
        return this.http.post("http://localhost:3000/message", body, {headers: headers})
            .map((response: Response) => {
                const result = response.json();
                var message=new Message(result.obj.content, "Ashish", result.obj._id, null);
                this.messages.push(message); 
                return message;
            })
            .catch((error: Response) => Observable.throw(error.json()));
    } 

    getMessages(){
        return this.http.get('http://localhost:3000/message')
        .map((response: Response) => {
            const messages = response.json().obj;
            let transformedMessages: Message[] = [];
            for(let msg of messages){
                transformedMessages.push(new Message(msg.content,"ashish",msg._id,null));
            }
            this.messages = transformedMessages;
            return transformedMessages;
        })
        .catch((error: Response) => Observable.throw(error.json()));
    }


    editMessage(message: Message){
        this.messageIsEdit.emit(message);
    }

    updateMessage(message: Message){
        var body = JSON.stringify(message);
        var headers = new Headers({"Content-Type":"application/json"});
        return this.http.patch("http://localhost:3000/message/"+message.messageId, body, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw(error.json()));
    }

    deleteMessage(message:Message){
        this.messages.splice(this.messages.indexOf(message),1);
        var body = JSON.stringify(message);   
        return this.http.delete("http://localhost:3000/message/"+message.messageId)
        .map((response :Response)=> response.json())
        .catch((error: Response) => Observable.throw(error.json()));
    }
}