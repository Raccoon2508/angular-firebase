import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { FirebaseService } from './firebase.service';
import { BaseComponent } from './base/base.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, BaseComponent ],
  bootstrap:    [ AppComponent ],
  providers: [FirebaseService]
})
export class AppModule { }
