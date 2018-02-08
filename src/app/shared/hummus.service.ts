import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
// import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

// Models
import { User } from '../shared/user';
import { Hummus } from '../shared/hummus';

@Injectable()
export class HummusService {

  constructor(private db: AngularFireDatabase) { }

  getUser(userid: string){
  	let observeUser: any, returnUser: any;
  	//console.log('looking for user userid', userid);
    this.db.object(`users/${userid}`).snapshotChanges().subscribe(action =>{
      returnUser = action.payload.val();
    });
    observeUser = this.db.object(`users/${userid}`).valueChanges();

    return [observeUser, returnUser];
  }

  updateUser(userid: string, user: object){
  	if(userid && user){
  		this.db.object(`users/${userid}`).update( user.valueOf() );
  	}
  }

}
