import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

// Services
import { HummusService } from '../shared/hummus.service';

// Models
import { User } from '../shared/user';
import { Hummus } from '../shared/hummus';

@Component({
  selector: 'app-hummushome',
  templateUrl: './hummushome.component.html',
  styleUrls: ['./hummushome.component.css']
})
export class HummushomeComponent implements OnInit {
	user: Observable<any>;
	cached_user: User;
	hummuses: any;
	hummusVotes: any;

	constructor(
		private rtd: HummusService, 
		private route: ActivatedRoute,
		private db: AngularFireDatabase
		) { }

	ngOnInit() {
		this.getUser();
		this.getHummus();
	}

	getHummus(){
		this.hummuses = this.db.list('hummuses').valueChanges();
	}

	getUser(): void {
		// Get UID from parameter 
		const paramId = this.route.snapshot.paramMap.get('id');

		// Cache User in Component
		this.db.object(`users/${paramId}`).snapshotChanges().subscribe(action =>{
			console.log('action type', action.type);
			console.log('action key', action.key);
			console.log('action payload', action.payload.val());
			this.cached_user = action.payload.val();
		});
		this.user = this.db.object(`users/${paramId}`).valueChanges();
	}

	userSign(){
		if(!this.cached_user.signedName || !this.cached_user.signedVote ){return '';}
		console.log('calling on submit with...', this.cached_user)
		this.cached_user.hasSigned = true;
		this.rtd.updateUser(this.cached_user.id, this.cached_user);
	}

	userVote(hummid: string, val: number){
		console.log(hummid);
		this.db.object(`hummuses/${hummid}/votes`).update({
			[ this.cached_user.id] : val
		});
	}
}
