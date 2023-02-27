import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogComponent } from './catalog/catalog.component';
import { HomeComponent } from './home/home.component';
import { HomechildComponent } from './homechild/homechild.component';
import { Homechild2Component } from './homechild2/homechild2.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent, data: { title: 'Login' } },
  { path: 'home', component: HomeComponent, data: { title: 'Home' } },
  { path: 'homechild', component: HomechildComponent, data: { title: 'HomeChild' } },
  // {
  //   path: 'home',
  //   component: HomeComponent,
  //   data: { title: 'Home' },
  //   children: [
  //     {
  //       path: 'homechild',
  //       component: HomechildComponent,
  //       data: { title: 'Child1' },
  //       children: [
  //         {
  //           path: 'homechild2',
  //           component: Homechild2Component,
  //           data: { title: 'Child2' }
  //         }
  //       ]
  //     }
  //   ],
  // },
  { path: 'catalog', component: CatalogComponent, data: { title: 'Catalog' } },
  { path: '**', redirectTo: 'login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
