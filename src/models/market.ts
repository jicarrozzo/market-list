export enum ListState {
	ACTIVE = 0,
	FINALIZE = 1
}

export class List {
	name: string;
	color: string;
	state: number;

	items: Item[];

	constructor() {
		this.items = new Array<Item>();
		this.state = ListState.ACTIVE;
		this.name = 'Your list';
	}
}

export class Item {
	name: string;
	category: string;
	state: number;
	edit: boolean;

	constructor(_n?: string) {
		this.state = ListState.ACTIVE;
		this.name = _n || '';
		this.edit = false;
	}
}
