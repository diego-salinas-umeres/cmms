import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routes } from '../../app.routes';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

  list = [
    {name:'INVENTARIO', route:'/inventory'}, 
    {name:'ORDENES DE TRABAJO', route:'/work-order'},
    {name:'CRONOGRAMA', route:'/schedule'},
    {name:'USUARIOS', route:'/users'},
  ]

}
