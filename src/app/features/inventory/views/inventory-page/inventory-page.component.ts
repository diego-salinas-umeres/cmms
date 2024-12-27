import { Component } from '@angular/core';
import { TableServerSideComponent } from "../../../../shared/components/table-server-side/table-server-side.component";
import { Router } from '@angular/router';
import { RouterStateService } from '../../../../core/services/router-state/router-state.service';

@Component({
  selector: 'app-inventory-page',
  standalone: true,
  imports: [TableServerSideComponent],
  templateUrl: './inventory-page.component.html',
  styleUrl: './inventory-page.component.scss'
})
export class InventoryPageComponent {
  constructor(private router: Router, private routerState:RouterStateService){}

  ngOnInit() {
  }

  gotoCreate(){
    this.router.navigateByUrl('/inventory/create')
  }

}
