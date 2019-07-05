import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-item-details',
  templateUrl: 'item-details.html',
})
export class ItemDetailsPage {
  public ordersegment:any = "current";
  public showableData:any;

  allItems={
    current:[
      {status:"Pending"},{status:"Approved"},{status:"Pending"},
      {status:"Approved"},{status:"Pending"}
    ],
    complete:[
      {status:"Cancel"},{status:"Complete"},
      {status:"Cancel"},{status:"Cancel"},
      {status:"Complete"},{status:"Cancel"},
      {status:"Complete"},{status:"Complete"}
    ]
    
    }
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.showableData = this.allItems.current;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ItemDetailsPage');
  }

  segmentChange(value){
    let vv = value;
    this.showableData = this.allItems[vv]
  }
  

  trackOrder(){
    this.navCtrl.push("TrackOrderPage")
  }

}

