import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SiteComponent } from './site/site.component';
import { EquipmentComponent } from './equipment/equipment.component';

// Routes for child Module (protectedModule). Since protected module is lazy loaded in in the 
// app-routing.module the full path is `/protected/dashboard`
const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'site',
    component: SiteComponent
  },
  {
    path: 'equipment',
    component: EquipmentComponent
  },
  {
    path: '**',
    redirectTo: 'login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProtectedRoutingModule { }
