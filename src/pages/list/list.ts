import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { List, Item, ListState } from '../../models/market';

@IonicPage()
@Component({
	selector: 'page-list',
	templateUrl: 'list.html'
})
export class ListPage {
	list: List = new List();

	constructor(public navCtrl: NavController, public navParams: NavParams) {}

	ionViewDidLoad() {
		let i = new Item('prueba 1');
		let ii = new Item('prueba 2');
		// this.list.items =[..., i];
	}

	addItem() {
		this.list.items.push(new Item());
	}
	setState(i: Item) {
		i.state = i.state == 0 ? 1 : 0;
		console.log(i);
	}
	setFocus(i: Item) {
		this.list.items.forEach((t: Item) => {
			t.edit = false;
		});
		i.edit = true;
	}
	delete(i: Item) {
		console.log(i);

		let index: number = this.list.items.indexOf(i, 0);
		if (index > -1) {
			this.list.items.splice(index, 1);
		}
	}
}
