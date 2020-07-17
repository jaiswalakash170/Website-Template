import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeaderNavigationComponent } from './header/header-navigation/header-navigation.component';
import { HeaderContentComponent } from './header/header-content/header-content.component';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';
import { ActionComponent } from './action/action.component';
import { WorkComponent } from './work/work.component';
import { PricingComponent } from './pricing/pricing.component';
import { BlogComponent } from './blog/blog.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderNavigationComponent,
    HeaderContentComponent,
    AboutComponent,
    ServiceComponent,
    ActionComponent,
    WorkComponent,
    PricingComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
