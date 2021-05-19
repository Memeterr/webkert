import { Component, OnInit, Input, Output, EventEmitter, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Observation } from './../../shared/models/observation.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit, OnChanges {

	@Input() observation: Observation;

	@Output() updateObservation = new EventEmitter<string>();

	// Itt valamiért nem tudtam beállítani alapértéknek az observation objektumból jövő adatokat
	form: FormGroup = new FormGroup({
		id: new FormControl(''),

		subject: new FormControl('', [Validators.required, Validators.maxLength(100)]),
		code: new FormControl('', [Validators.required, Validators.maxLength(5)]),
		valuee: new FormControl('', [Validators.required, Validators.maxLength(100)]),
		note: new FormControl('', [Validators.maxLength(100)]),

		status: new FormControl('', [Validators.required]),
		category: new FormControl('', [Validators.required]),
		interpretation: new FormControl('', [Validators.required]),
		bodySite: new FormControl('', [Validators.required]),

		issued: new FormControl('', [Validators.required]),
		effective: new FormControl('', [Validators.required]),

		// Default values
		basedOn: new FormControl('CarePlan', [Validators.required]),
		partOf: new FormControl('Procedure', [Validators.required]),
		focus: new FormControl('Intervention', [Validators.required]),
		encounter: new FormControl('Ambulatory', [Validators.required]),
		performer: new FormControl('Care Team', [Validators.required]),
		dataAbsentReason: new FormControl('Not Asked', [Validators.required]),
		method: new FormControl('Unknown', [Validators.required]),
		specimen: new FormControl('Tissues', [Validators.required]),
		device: new FormControl('Medical Device', [Validators.required]),
		referenceRange: new FormControl(30, [Validators.required]),
		hasMember: new FormControl('Observation', [Validators.required]),
		derivedFrom: new FormControl('ImagingStudy', [Validators.required])
	});
	error = false;

	constructor() {	

	}

	ngOnInit(): void {
		//console.log(this.form.value.subject);
		//this.form.value.subject = this.observation.subject;
		//console.log(this.form.value.subject);


		// let issued = new Date(this.observation.issued);
		//console.log(issued.getMilliseconds());
		//console.log(this.observation.issued);
		this.form.setValue({
			id: this.observation.id,

			subject: this.observation.subject,
			code: this.observation.code,
			valuee: this.observation.valuee,
			note: this.observation.note,

			status: this.observation.status,
			category: this.observation.category,
			interpretation: this.observation.interpretation,
			bodySite: this.observation.bodySite,

			issued: this.observation.issued,
			effective: this.observation.effective,

			// Default values
			basedOn: this.observation.basedOn,
			partOf: this.observation.partOf,
			focus: this.observation.focus,
			encounter: this.observation.encounter,
			performer: this.observation.performer,
			dataAbsentReason: this.observation.dataAbsentReason,
			method: this.observation.method,
			specimen: this.observation.specimen,
			device: this.observation.device,
			referenceRange: this.observation.referenceRange,
			hasMember: this.observation.hasMember,
			derivedFrom: this.observation.derivedFrom
		});
	}

	ngOnChanges(changes: SimpleChanges): void {
	  	this.observation = changes.observation.currentValue;

	  	this.form.setValue({
			id: changes.observation.currentValue.id,

			subject: changes.observation.currentValue.subject,
			code: changes.observation.currentValue.code,
			valuee: changes.observation.currentValue.valuee,
			note: changes.observation.currentValue.note,

			status: changes.observation.currentValue.status,
			category: changes.observation.currentValue.category,
			interpretation: changes.observation.currentValue.interpretation,
			bodySite: changes.observation.currentValue.bodySite,

			issued: changes.observation.currentValue.issued,
			effective: changes.observation.currentValue.effective,

			// Default values
			basedOn: changes.observation.currentValue.basedOn,
			partOf: changes.observation.currentValue.partOf,
			focus: changes.observation.currentValue.focus,
			encounter: changes.observation.currentValue.encounter,
			performer: changes.observation.currentValue.performer,
			dataAbsentReason: changes.observation.currentValue.dataAbsentReason,
			method: changes.observation.currentValue.method,
			specimen: changes.observation.currentValue.specimen,
			device: changes.observation.currentValue.device,
			referenceRange: changes.observation.currentValue.referenceRange,
			hasMember: changes.observation.currentValue.hasMember,
			derivedFrom: changes.observation.currentValue.derivedFrom
		});
	  	//console.log(changes);
  }

	onSubmit(): void {
		this.error = false;
		if(this.form.valid) {
			return;
		}
		this.error = true;
	}
}
