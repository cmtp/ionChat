import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ChatService } from '../../providers/chat-service/chat-service';
/**
 * Generated class for the ChatPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {

  user: string = "";
  messages: any[] = [];
  connection: any;
  message: any;
  chatForm: FormGroup;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    public chatService: ChatService
  ){
    this.user = this.navParams.get('username');
    // this.connection = this.chatService.getMessages().subscribe(message => {
    //   this.messages.push(message);
    // });
    this.chatForm = this.formBuilder.group({
      message: ['', Validators.required ]
    });
  }

  ionViewDidLoad() {
      if ( undefined  === this.navParams.get('username')) {
        this.navCtrl.setRoot('HomePage');
      }
    this.connection = this.chatService.getMessages().subscribe(message => {
      console.log(message);
      this.messages.push(message);
    });
    console.log('ionViewDidLoad ChatPage');
  }

  ionViewWillUnload(){
    this.connection.unsubscribe();
  }

  sendMessage() {
    console.log(this.user.substr(0, 1));
    this.message = {
      user: this.user,
      start: this.user.substr(0, 1),
      text: this.chatForm.value.message
    };
    this.chatService.sendMessage(this.message);
    this.message = {};
    this.chatForm.reset();
  }
}
