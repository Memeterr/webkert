import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
	
	@Output() callSelectPage = new EventEmitter<string>();

	constructor() { }

	ngOnInit(): void {
	}

	select(target: string): void {
		this.callSelectPage.emit(target);
	}

}
