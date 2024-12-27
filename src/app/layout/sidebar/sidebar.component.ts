import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { NavigationEnd } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements OnInit {

  currentUrl:string = ''
  svgCache: { [key: string]: SafeHtml } = {};
  loadingSvg: { [key: string]: boolean } = {}; 

  list = [
    {name:'INVENTARIO', route:'/inventory',icon:'app/assets/icons/box.svg', active:false}, 
    {name:'ORDENES DE TRABAJO', route:'/work-orders', icon:'app/assets/icons/work-order.svg', active:false},
    {name:'CRONOGRAMA', route:'/schedule', icon:'app/assets/icons/schedule.svg', active:false},
    {name:'USUARIOS', route:'/users', icon:'app/assets/icons/users.svg', active:false},
  ]

  constructor(
    private router:Router, 
    private sanitizer: DomSanitizer, 
    private http: HttpClient
    ) {}

    ngOnInit(): void {
      this.router.events.subscribe((event) => {
        if (event instanceof NavigationEnd) {
          this.currentUrl = event.urlAfterRedirects;
          this.list.forEach(item => {
            item.active = this.currentUrl.startsWith(item.route);
          })
        }
      });
    }

    getSanitizedSvg(iconPath: string): SafeHtml | null {
      if (this.svgCache[iconPath]) {
        return this.svgCache[iconPath];
      }
  
      if (this.loadingSvg[iconPath]) {
        return null;
      }

      this.loadingSvg[iconPath] = true;
  
      this.http.get(iconPath, { responseType: 'text' }).subscribe({
        next: (svgContent) => {
          const sanitizedSvg = this.sanitizer.bypassSecurityTrustHtml(svgContent);
          this.svgCache[iconPath] = sanitizedSvg;
          this.loadingSvg[iconPath] = false;
        },
        error: (err) => {
          console.error(`Error loading SVG: ${iconPath}`, err);
          this.loadingSvg[iconPath] = false;
        },
      });
  
      return null;
    }

}
