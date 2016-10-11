import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { AppComponent }  from './app.component';
import { NavbarComponent }  from './components/navbar/navbar.component';
import { SearchComponent }  from './components/search/search.component';
import {AboutComponent} from './components/aboutComponent/about.component';
import {SpotifyService} from './services/spotify.services';
import {HttpModule} from '@angular/http';
import { routing } from './app.routes';
@NgModule({
  imports: [ BrowserModule, routing, FormsModule, HttpModule],
  declarations: [ AppComponent, NavbarComponent, AboutComponent, SearchComponent ],
  bootstrap: [ AppComponent ],
  providers: [SpotifyService]
})
export class AppModule { }
