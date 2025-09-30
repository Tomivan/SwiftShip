import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ShipmentsComponent } from './shipments/shipments.component';
import { CustomersComponent } from './customers/customers.component';
import { LoadManagementComponent } from './load-management/load-management.component';
import { StatusManagementComponent } from './status-management/status-management.component';
import { ReportsComponent } from './reports/reports.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
    { path: '', component: DashboardComponent},
    { path: 'shipments', component: ShipmentsComponent},
    { path: 'customers', component: CustomersComponent},
    { path: 'load-management', component: LoadManagementComponent},
    { path: 'status-management', component: StatusManagementComponent},
    { path: 'reports', component: ReportsComponent},
    { path: '**', component: PageNotFoundComponent},
];
