import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CatalogComponent } from './catalog/catalog.component';
import { HomechildComponent } from './homechild/homechild.component';
import { Homechild2Component } from './homechild2/homechild2.component';
import { Breadcrumb1Component } from './breadcrumb1/breadcrumb1.component';

@NgModule({
  declarations: [
    AppComponent,
    BreadcrumbComponent,
    LoginComponent,
    HomeComponent,
    CatalogComponent,
    HomechildComponent,
    Homechild2Component,
    Breadcrumb1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
