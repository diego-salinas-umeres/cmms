import { Routes } from '@angular/router';
import { InventoryPageComponent } from './features/inventory/views/inventory-page/inventory-page.component';
import { WorkOrdersPageComponent } from './features/work-orders/views/work-orders-page/work-orders-page.component';
import { InventoryCreateComponent } from './features/inventory/views/inventory-create/inventory-create.component';
import { inventoryRoutes } from './features/inventory/inventory.routes';
import { workOrdersRoutes } from './features/work-orders/work-orders.routes';

export const routes: Routes = [
    { path: '', redirectTo: '/inventory', pathMatch: 'full' },
    { path: 'inventory', children: inventoryRoutes},
    { path: 'work-orders', children: workOrdersRoutes },
];
