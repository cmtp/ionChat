import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
  chatForm: FormGroup;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder
  ){
    this.user = this.navParams.get('username');
    this.chatForm = this.formBuilder.group({
      message: ['', Validators.required ]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatPage');
  }
  sendMessage() {
    this.messages.push({
      user: this.user,
      text: this.chatForm.value.message
    });
    this.chatForm.reset();
  }
}
