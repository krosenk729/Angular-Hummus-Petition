import { Injectable } from '@angular/core';
//import { AngularFireDatabase } from 'angularfire2/database';
//import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {

	constructor(public afAuth: AngularFireAuth ) { }

	loginWithGoogle(){
		return this.afAuth.auth.signInWithPopup( new firebase.auth.GoogleAuthProvider() );
	}
	logout(){
		return this.afAuth.auth.signOut();
	}
}
