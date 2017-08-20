import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { RequestComponent } from './inventory/request/request.component';
import { ManageComponent } from './inventory/manage/manage.component';
import { ApproveComponent } from './inventory/approve/approve.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';

const appRoutes: Routes = [
  { path: "", component: HomeComponent },
  { path: "manage", component: ManageComponent},
  { path: "request", component: RequestComponent },
  { path: "approve", component: ApproveComponent },
  { path: "signin", component: SigninComponent },
  { path: "signup", component: SignupComponent }
];

export const firebaseConfig = {
  apiKey: "AIzaSyDgHIivntvw21287l5HXvIhqvIdN080ztY",
  authDomain: "inventory-app-2098e.firebaseapp.com",
  databaseURL: "https://inventory-app-2098e.firebaseio.com",
  projectId: "inventory-app-2098e",
  storageBucket: "inventory-app-2098e.appspot.com",
  messagingSenderId: "336029239911"
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    RequestComponent,
    ManageComponent,
    ApproveComponent,
    SignupComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
