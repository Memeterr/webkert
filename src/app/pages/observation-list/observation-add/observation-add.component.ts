import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Observation } from './../../../shared/models/observation.model';

@Component({
  selector: 'app-observation-add',
  templateUrl: './observation-add.component.html',
  styleUrls: ['./observation-add.component.scss']
})
export class ObservationAddComponent implements OnInit {
	currentDate: string;
	// Set some default values (no need for 20 input fields)
	// Make 4 input text, and 6 select
	statuses: string[] = [
		'final',
		'cancelled',
		'unknown'
	];
	categories: string[] = [
		'exam',
		'laboratory',
		'survey'
	];
	interpretations: string[] = [
		'normal',
		'better',
		'worse'
	];
	bodySites: string[] = [
		'Jaw region',
		'Synostosis',
		'Pectoral region'
	];
	selectedStatus: string;
	selectedCategory: string;
	selectedInterpretation: string;
	selectedBodySite: string;

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

	constructor(private dialogRef: MatDialogRef<ObservationAddComponent>) { }

	ngOnInit(): void {
		var utc = new Date().toJSON().slice(0,10).replace(/-/g,'/');
		this.currentDate = utc;
	}

	onSubmit(): void {
		this.error = false;
		if(this.form.valid) {
			return;
		}
		this.error = true;
	}

	close(): void {
		if(this.form.valid) {
			//this.form.value.issued = this.form.value.issued.getDate();
			this.dialogRef.close(this.form.value);
		}
		this.dialogRef.close();
	}

}
