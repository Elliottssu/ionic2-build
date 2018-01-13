import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-me',
  templateUrl: 'me.html'
})
export class MePage {
  items = []
  constructor(public navCtrl: NavController) {
    this.items = [
      {
        name:'邀请好友免费领红包'
      },
      {
        name:'我的拼单'
      },
      {
        name:'我的免单券'
      },
      {
        name:'收货地址'
      },
      {
        name:'官方客服'
      },
      {
        name:'设置'
      },
    ]
  }

}
