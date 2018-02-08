import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Firebase 
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

// Enviornment
import { environment } from '../environments/environment';

// Modules
import { AuthService } from './shared/auth.service';
import { HummusService } from './shared/hummus.service';

// Components 
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HummushomeComponent } from './hummushome/hummushome.component';
import { AggregatorPipe } from './shared/aggregator.pipe';

const routes: Routes = [
{ path: 'hummus', component: HummushomeComponent},
{ path: 'hummus/:id', component: HummushomeComponent},
{ path: 'welcome', component: WelcomeComponent},
{ path: '**', redirectTo: 'welcome'}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    WelcomeComponent,
    HummushomeComponent,
    AggregatorPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AuthService, HummusService],
  bootstrap: [AppComponent]
})
export class AppModule { }
