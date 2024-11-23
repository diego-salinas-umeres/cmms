import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  list = [
    {name:'INVENTARIO', route:'/inventory',icon:'app/assets/icons/box.svg'}, 
    {name:'ORDENES DE TRABAJO', route:'/work-order', icon:'app/assets/icons/work-order.svg'},
    {name:'CRONOGRAMA', route:'/schedule', icon:'app/assets/icons/schedule.svg'},
    {name:'USUARIOS', route:'/users', icon:'app/assets/icons/users.svg'},
  ]
}
