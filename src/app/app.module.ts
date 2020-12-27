import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MicroApp } from './micro-app/micro-app.component';
import { HomeComponent } from './home/home.component';
import { createCustomElement } from '@angular/elements';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, MicroApp, PageNotFoundComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [],
  bootstrap: [],
  entryComponents: [AppComponent, MicroApp],
})
export class AppModule {
  static injector: Injector;
  constructor(injector: Injector) {
    AppModule.injector = injector;
  }
  ngDoBootstrap() {
    const microElement = createCustomElement(MicroApp, {
      injector: AppModule.injector,
    });
    customElements.define('micro-app', microElement);
  }
}
