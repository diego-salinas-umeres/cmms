import { Routes } from "@angular/router";
import { InventoryPageComponent } from "./views/inventory-page/inventory-page.component";
import { InventoryCreateComponent } from "./views/inventory-create/inventory-create.component";

export const inventoryRoutes: Routes = [
    { path: '', component: InventoryPageComponent},
    { path: 'create', component: InventoryCreateComponent}
]