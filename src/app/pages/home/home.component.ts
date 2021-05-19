import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

import { ObservationAddComponent } from '../observation-list/observation-add/observation-add.component';
import { Observation } from './../../shared/models/observation.model';

import { Observable } from 'rxjs';

import { FbBaseService } from './../../services/fb-base.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
	page = '';

	observationDetailId: string;
	observations: Observation[]= [];
	observation: Observation;

	constructor(private dialog: MatDialog, private service: FbBaseService) { }

	ngOnInit(): void {
		this.page = 'home';
		this.getObservations();
	}

	getObservations() {
		this.service.get('observations').subscribe(result => {
			if(result?.length > 0) {
				this.observations = result as Observation[];
			}
		});
	}

	openDialog() {
		const dialogRef = this.dialog.open(ObservationAddComponent, {});
		dialogRef.afterClosed().subscribe(result => {
			if(result && result.code) {
				this.service.add('observations', result);
			}
		});
	}

	onSelect(event: string): void {
		this.page = event;
	}

	getDetails(event: string): void {
		//console.log(event);
		this.observationDetailId = event;
		this.service.getById('observations', this.observationDetailId).subscribe(result => {
			this.observation = result as Observation;

			const issued = result.issued.toDate();
			const effective = result.effective.toDate();

			this.observation.issued = issued;
			this.observation.effective = effective;
		});
		//this.page = event;
	}

	updateObservation(event: Observation) {
		//console.log(event);
		this.service.update('observations', this.observationDetailId, event);
		this.page = 'observation-list';
	}

	goToDetails(event: string): void {
		this.page = event;
	}

}
