import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-new',
  templateUrl: 'new.html'
})
export class NewPage {

  news: Array<any>
  constructor(public navCtrl: NavController) {
    this.news = [
      {
        img: 'http://omsproductionimg.yangkeduo.com/images/2018-01-02/0c068962fccafe29559944ef126d5e73.jpeg@750w_1l_50Q.src',
        title:'【蓝光香味负离子】吹风机家用大小功率发廊理发店电吹风',
        price: 21.8,
      },
      {
        img:'http://omsproductionimg.yangkeduo.com/images/2017-11-07/cc61e687542454364aa30f39a271500a.jpeg@750w_1l_50Q.src',
        title:'【年终清仓】电动剃须刀买一送三替换刀头水洗胡须刀胡子刀全国包邮',
        price:16.8,
      },
      {
        img:'http://omsproductionimg.yangkeduo.com/images/2018-01-09/70e82c717d133db05756b12ca44289d7.jpeg@750w_1l_50Q.src',
        title:'【正品长虹 假一罚十 】可顺丰入户7.5/8.2/9公斤',
        price:558,
      },
      {
        img:'http://omsproductionimg.yangkeduo.com/images/2017-11-15/307c4e3a19b14dccba0332a141383dda.jpeg@750w_1l_50Q.src',
        title:'电热水壶 烧水壶 双层防烫电水壶',
        price:23.4,
      },
      {
        img:'http://omsproductionimg.yangkeduo.com/images/2017-12-24/91753ed96ae0d06647ac9e411723e124.jpeg@750w_1l_50Q.src',
        title:'YESS魔卡usb木纹迷你小型空气加湿器静音家用',
        price:12.3,
      },
      {
        img:'http://omsproductionimg.yangkeduo.com/images/2017-12-14/cff63c10af2c0fc08e26d9eb72c9bce2.jpeg@750w_1l_50Q.src',
        title:'新款三刀头充电刮胡刀鼻毛器理发器多功能三合',
        price:33.1,
      },
      {
        img:'http://omsproductionimg.yangkeduo.com/images/2017-11-29/5fab4ae7e8756e4f78853824d5b3b0db.jpeg@750w_1l_50Q.src',
        title:'蓝光杀菌波轮洗衣机家用大容量带烘干风干省电静音',
        price:11.3,
      },
      {
        img:'http://omsproductionimg.yangkeduo.com/images/2017-12-22/e26b1220a9d0c093daee2579a02590a2.jpeg@750w_1l_50Q.src',
        title:'【蓝光香味负离子】吹风机家用大小功率发廊理发店电吹风',
        price:31.2,
      },
      {
        img:'http://omsproductionimg.yangkeduo.com/images/2017-12-14/b2f6ef0cf9ee48a84203dc346396d8af.jpeg@750w_1l_50Q.src',
        title:'YESS魔卡usb木纹迷你小型空气加湿器静音家用',
        price:23.0,
      },
      {
        img:'http://omsproductionimg.yangkeduo.com/images/2017-12-28/501619bc2e2ac45a5c3355a250a62cc2.jpeg@750w_1l_50Q.src',
        title:'可顺丰入户7.5/8.2/9公斤全自动洗衣机',
        price:44.9,
      },
    ]
  }

}
