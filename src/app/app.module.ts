import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppOneComponent } from './app-one/app-one.component';
import { AppTwoComponent } from './app-two/app-two.component';
import { AppComponent } from './app.component';
import { AppThreeComponent } from './app-three/app-three.component';




@NgModule({
  declarations: [
    AppComponent,
    AppOneComponent,
    AppTwoComponent,
    AppThreeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
