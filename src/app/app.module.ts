import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeaderNavigationComponent } from './header/header-navigation/header-navigation.component';
import { HeaderContentComponent } from './header/header-content/header-content.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderNavigationComponent,
    HeaderContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
