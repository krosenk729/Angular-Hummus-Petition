import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Services
import { AuthService } from '../shared/auth.service';
import { HummusService } from '../shared/hummus.service';

// Models
import { User } from '../shared/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private isLoggedIn: boolean;
  public user_cache: User = {
          id: '',
          name: '',
          email: '',
          img: ''
        };

  constructor(public authService: AuthService, public rdt: HummusService, private router: Router) {
   this.authService.afAuth.auth.onAuthStateChanged((auth) => {
  		if(!auth){

  			//console.log('logged out');
        this.isLoggedIn = false;
        this.user_cache = {
          id: '',
          name: '',
          email: '',
          img: ''
        }
        //console.log('routing to welcome');
  			this.router.navigate(['/welcome']);

  		} else {

  			//console.log('logged in', auth);
        this.isLoggedIn = true;
        this.user_cache = {
          id: auth.uid,
          name: auth.displayName,
          email: auth.email,
          img: auth.photoURL
        }
        //console.log('routing to ...', this.user_cache.id);
        this.rdt.updateUser(this.user_cache.id, this.user_cache);
  			this.router.navigate(['/hummus', {id: this.user_cache.id}]);
  		}
  	});
  }

  ngOnInit() {
  }

  login(){
  	this.authService.loginWithGoogle().then((data)=>{
  		this.router.navigate(['hummus/', {id: this.user_cache.id}]);
  	});
  }
  logout(){
  	this.authService.logout().then((data)=>{
  		this.router.navigate(['welcome']);
  	});
  }
}
