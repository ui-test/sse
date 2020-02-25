import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ParentViewComponent } from './parent-view/parent-view.component';
import { ChildViewComponent } from './child-view/child-view.component';
import { ComponentDataService } from './component-data.service';
@NgModule({
  declarations: [
    AppComponent,
    ParentViewComponent,
    ChildViewComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ComponentDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
