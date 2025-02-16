import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// ✅ Import Components
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InventoryComponent } from './inventory/inventory.component';
import { ContactComponent } from './contact/contact.component';
import { SnackbarComponent } from './snackbar/snackbar.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'inventory', component: InventoryComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'snackbar', component: SnackbarComponent },
  { path: '**', component: LoginComponent } // Wildcard for invalid paths
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
