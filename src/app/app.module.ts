import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AutogridComponent } from './component/autogrid/autogrid.component';
import { HeaderComponent } from './component/header/header.component';
import { CommonService } from "./service/common.service";

@NgModule({
  declarations: [
    AppComponent,
    AutogridComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
