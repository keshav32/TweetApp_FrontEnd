import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { TweetappService } from './services/tweetapp.service';
import { UserLandingPageComponent } from './user/user-landing-page/user-landing-page.component';
import { PosttweetComponent } from './user/posttweet/posttweet.component';
import { SearchtweetComponent } from './user/searchtweet/searchtweet.component';
import { ViewtweetsComponent } from './user/viewtweets/viewtweets.component';
import { ChangepasswordComponent } from './user/changepassword/changepassword.component';
import { CommonModule } from '@angular/common';
import { ForgotpasswordComponent } from './home/forgotpassword/forgotpassword.component';
import { RouterModule } from '@angular/router';
import { ViewprofileComponent } from './viewprofile/viewprofile.component';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireModule } from '@angular/fire';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    UserLandingPageComponent,
    PosttweetComponent,
    SearchtweetComponent,
    ViewtweetsComponent,
    ChangepasswordComponent,
    ForgotpasswordComponent,
    ViewprofileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    RouterModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyCqFc5DMFtV1Ba83halyFmTiCgHnhGdu60",
      authDomain: "tweetappuiangular.firebaseapp.com",
      databaseURL: "https://tweetappuiangular-default-rtdb.firebaseio.com",
      projectId: "tweetappuiangular",
      storageBucket: "tweetappuiangular.appspot.com",
      messagingSenderId: "692850185226",
      appId: "1:692850185226:web:027db7146458a378f63bf3",
      measurementId: "G-8NQ7W804QY"
    })
  ],
  providers: [TweetappService],
  bootstrap: [AppComponent]
})
export class AppModule { }
