import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the HomePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  homeForm: FormGroup;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder
  ) {
    this.homeForm = this.formBuilder.group({
      username: ['', Validators.required]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  goToChat() {
    console.log(this.homeForm.value);
    this.navCtrl.setRoot("ChatPage", {
      username: this.homeForm.value.username
    });
  }
}
