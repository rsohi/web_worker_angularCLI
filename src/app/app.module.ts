import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlyWorkerService } from "./services/fly-worker.service"

 
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [FlyWorkerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
