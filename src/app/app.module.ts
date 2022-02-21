import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeyComponent } from './exercise1-your-first-component/hey/hey.component';

@NgModule({
  declarations: [
    AppComponent,
    HeyComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
