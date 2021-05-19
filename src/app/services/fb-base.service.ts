import { Injectable, } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

import { Observation } from './../shared/models/observation.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FbBaseService {

	constructor(private afs: AngularFirestore) { }

	get(collectionName: string) {
		return this.afs.collection(collectionName).valueChanges(); 
	}

	getById(collectionName: string, id: string): Observable<any> {
		return this.afs.collection(collectionName).doc(id).valueChanges();
	}

	async add(collectionName: string, data: Observation, id?:string): Promise<string> {
		const uid = id ? id : this.afs.createId();
		data.id = uid;
		await this.afs.collection(collectionName).doc(uid).set(data);
		return uid;
	}

	update(collectionName: string, id: string, data: any) {
		return this.afs.collection(collectionName).doc(id).update(data);
	}

	delete(collectionName: string, id: string) {
		return this.afs.collection(collectionName).doc(id).delete();
	}
}
