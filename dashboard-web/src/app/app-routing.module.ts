import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PanelsComponent } from './panels/panels.component';
import { HomeComponent } from './home/home.component';
import { ExecutorComponent } from './executor/executor.component';
import { ContactComponent } from "./contact/contact.component";
import { SupportComponent } from "./support/support.component";

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'panels', component: PanelsComponent },
  { path: 'executor', component: ExecutorComponent },
  { path: 'contact', component: ContactComponent},
  { path: 'support', component: SupportComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
