import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the SlotBookingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-slot-booking',
  templateUrl: 'slot-booking.html',
})
export class SlotBookingPage {
  myDate:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl:ViewController) {
    this.myDate ="10/10/1229";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SlotBookingPage');
  }

  dismiss(){
    this.viewCtrl.dismiss()
  }

}
