import { Component } from '@angular/core';
import { TableServerSideComponent } from "../../../../shared/components/table-server-side/table-server-side.component";

@Component({
  selector: 'app-inventory-page',
  standalone: true,
  imports: [TableServerSideComponent],
  templateUrl: './inventory-page.component.html',
  styleUrl: './inventory-page.component.scss'
})
export class InventoryPageComponent {

}
