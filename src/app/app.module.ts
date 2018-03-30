import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {PostComponent} from './components/post/post.component';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {RegisterComponent} from './components/register/register.component';
import {AppRoutingModule} from './app-routing.module';
import {HomeComponent} from './components/home/home.component';
import {LoginComponent} from './components/login/login.component';
import {ProfileComponent} from './components/profile/profile.component';
import {HttpClientModule} from '@angular/common/http';
import {EditComponent} from './components/edit/edit.component';
import {PostService} from './services/post.service';


@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    RegisterComponent,
    HomeComponent,
    LoginComponent,
    ProfileComponent,
    EditComponent,
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule {
}