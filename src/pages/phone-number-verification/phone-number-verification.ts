import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-phone-number-verification',
  templateUrl: 'phone-number-verification.html',
})
export class PhoneNumberVerificationPage {
  value:number=30;
  otp:any = {
    input1:"", input2:"", input3:"", input4:"", input5:""
  };
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams
  ) {
  }
  moveFocus(next:any, event:any, prev:any){
    if(event.key == 'Backspace'){
      prev.setFocus();
    }else{
      next.setFocus();
    }
  }
  ionViewDidEnter() {
      setInterval(() => {
        if(this.value >0){
          this.value = this.value-1;
        }
      }, 1000);
  }

  // resendButtonClick(){
  //   alert("Code successfully sent to your mobile number");
  // }
  resendClick(){
    this.value = 30;
  }

  clickContinue(){
    // this.navCtrl.push("AddPersonalDetailsPage");
    this.navCtrl.setRoot("HomePage");
  }



}
