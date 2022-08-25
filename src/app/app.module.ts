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
      apiKey: "AIzaSyBNo0VaAhOYGUXWjETe6aFuiL49Lx-mz4M",
      authDomain: "gencnexttweetapp.firebaseapp.com",
      databaseURL: "https://gencnexttweetapp-default-rtdb.firebaseio.com",
      projectId: "gencnexttweetapp",
      storageBucket: "gencnexttweetapp.appspot.com",
      messagingSenderId: "544960811957",
      appId: "1:544960811957:web:c5fbc52ff6e94070d27ffc",
      measurementId: "G-1NHTCXV2RT"
    })
  ],
  providers: [TweetappService],
  bootstrap: [AppComponent]
})
export class AppModule { }
