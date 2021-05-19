import { Component, OnInit, AfterViewInit, ViewChild, Output, EventEmitter, Input, OnChanges, SimpleChanges } from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';

import { FbBaseService } from './../../services/fb-base.service';

import { OBSERVATIONS } from './../../shared/database/observation.database';
import { Observation } from './../../shared/models/observation.model';

@Component({
  selector: 'app-observation-list',
  templateUrl: './observation-list.component.html',
  styleUrls: ['./observation-list.component.scss']
})
export class ObservationListComponent implements OnInit, AfterViewInit, OnChanges  {
	@Input() observations: Observation[] = [];
	dataSource = null;

	displayedColumns: string[] = ['basedOn', 'partOf', 'status', 'category', 
	'code', 'subject', 'focus', 'encounter', 'effective', 'issued', 'performer', 'valuee',
	'dataAbsentReason', 'interpretation', 'note', 'bodySite', 'method', 'specimen', 'device',
	'referenceRange', 'hasMember', 'derivedFrom', 'star', 'det'];

	
	pageSizeOptions: number[] = [4, 8];

	@Output() getObservation = new EventEmitter<string>();
	@Output() getDetailPath = new EventEmitter<string>();

  constructor(private service: FbBaseService) { }

  ngOnChanges(changes: SimpleChanges): void {
  	this.observations = changes.observations.currentValue;
  	this.dataSource = new MatTableDataSource(this.observations);
  	//console.log(changes);
  }

  ngOnInit(): void {
  	this.dataSource = new MatTableDataSource(this.observations);
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  delete(id: string) {
  	this.service.delete('observations', id);
  }

}
