import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {EmailsComponent} from './emails/emails.component';

const appRoutes: Routes = [
  {path: 'home', component: AppComponent},
  {path: 'emails', component: EmailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
