import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { from } from 'rxjs';
import { MenuComponent } from './menu/menu.component';
import { SignupComponent } from './signup/signup.component';

import firebase from 'firebase/app';
import 'firebase/auth';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CapitalizePipe } from './capitalize.pipe';
import { MyblogsComponent } from './myblogs/myblogs.component';
import { ProfileComponent } from './profile/profile.component';
import { CreateComponent } from './create/create.component';

// import{NgxEditorModule} from 'ngx-editor';
import{HttpClientModule} from '@angular/common/http';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { PostComponent } from './post/post.component';
import { ViewComponent } from './view/view.component';
import { CommentsComponent } from './comments/comments.component';
import { EditprofileComponent } from './editprofile/editprofile.component';

let firebaseConfig = {
  apiKey: "AIzaSyAI4gXat_Z-PDIPjTJZMYn0Jsz0AOy3bnA",
  authDomain: "scribe-cc820.firebaseapp.com",
  databaseURL: "https://scribe-cc820.firebaseio.com",
  projectId: "scribe-cc820",
  storageBucket: "scribe-cc820.appspot.com",
  messagingSenderId: "472358870479",
  appId: "1:472358870479:web:9347052172f14776db46ba",
  measurementId: "G-Z2DL5935QC"
};

firebase.initializeApp(firebaseConfig);


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    CapitalizePipe,
    MyblogsComponent,
    ProfileComponent,
    CreateComponent,
    PostComponent,
    ViewComponent,
    CommentsComponent,
    EditprofileComponent,
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    // NgxEditorModule,
    AngularEditorModule,
    HttpClientModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
